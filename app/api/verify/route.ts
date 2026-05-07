import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email: rawEmail, type, letterText, fileName, fileData, mimeType } = body;

    console.log(`🔍 Verification Request: type=${type}, email=${rawEmail}, file=${fileName}, textLength=${letterText?.length || 0}`);

    let email = rawEmail?.trim();
    let domain = '';
    let aiAnalysis = '';
    let trustScoreModifier = 0;

    // 1. Process Based on Type
    if (type === 'letter') {
      console.log("📄 Processing Letter/PDF Scan...");
      const combinedText = `${letterText || ''} ${fileName || ''} ${email || ''}`;

      // Robust domain extraction (stops at first non-domain character)
      const domainMatch = combinedText.match(/@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
      if (domainMatch) {
        domain = domainMatch[1].toLowerCase();
        // Clean up common merge artifacts (like .comletter)
        domain = domain.replace(/(com|org|net|gov|edu|in|co|io|me|biz|info).*/, '$1');
        console.log(`🎯 Identified Domain: ${domain}`);
      }

      if ((letterText && letterText.length >= 5) || fileData) {
        let attempts = 0;
        while (attempts < 2) {
          try {
            const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

            const promptText = `
              Analyze this job offer document for scams or red flags. 
              Identify the company name and recruiter details if possible.
              Keep your response concise. Include a "TL;DR" section at the end.
              Return a safety rating (0-100) prominently in the text.
              
              Text Content: ${letterText || 'None provided'}
            `;

            const contents: any[] = [{ role: 'user', parts: [{ text: promptText }] }];

            if (fileData && mimeType) {
              contents[0].parts.push({
                inlineData: {
                  mimeType: mimeType,
                  data: fileData
                }
              });
            }

            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: contents
            });

            aiAnalysis = response.text || '';
            console.log("🤖 AI Analysis Complete");
            break; // Success!
          } catch (aiErr: any) {
            attempts++;
            console.error(`❌ AI Attempt ${attempts} failed:`, aiErr.message);
            if (attempts >= 2) break;
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2s before retry
          }
        }

        if (aiAnalysis) {
          const ratingMatch = aiAnalysis.match(/(?:rating|score)[\s*:-]*(\d{1,3})/i) || aiAnalysis.match(/(\d{1,3})\s*\/\s*100/i);
          if (ratingMatch && ratingMatch[1]) {
             const extractedRating = parseInt(ratingMatch[1], 10);
             trustScoreModifier = extractedRating - 35; // Math.max(0, 35 + trustScoreModifier) = extractedRating
          } else {
            if (aiAnalysis.toLowerCase().includes('scam') && !aiAnalysis.toLowerCase().includes('not a scam')) {
              trustScoreModifier = -40;
            } else if (aiAnalysis.toLowerCase().includes('legitimate') || aiAnalysis.toLowerCase().includes('professional')) {
              trustScoreModifier = 20;
            }
          }
        }
      }

      if (!domain && !letterText && !fileData) {
        return NextResponse.json({ error: 'Please provide some text or a file to scan.' }, { status: 400 });
      }

    } else {
      console.log("📧 Processing Email Scan...");
      if (!email) {
        return NextResponse.json({ error: 'Email address is required for this scan type.' }, { status: 400 });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email format provided.' }, { status: 400 });
      }
      domain = email.split('@')[1]?.toLowerCase();
    }

    // 2. Verified Domain Check (Supabase)
    const { data: company, error } = domain ? await supabase
      .from('verified_companies')
      .select('*')
      .eq('domain', domain)
      .single() : { data: null, error: null };

    if (error && error.code !== 'PGRST116') {
      console.error("❌ Supabase Error:", error.message);
    }

    // 3. Response Generation
    let finalScore = 35;
    let finalStatus = 'Unverified';

    if (type === 'letter') {
      finalScore = Math.min(100, Math.max(0, 35 + trustScoreModifier));
      if (finalScore >= 70) {
        finalStatus = 'Likely Safe';
      } else if (finalScore >= 40) {
        finalStatus = 'Moderate Risk';
      } else {
        finalStatus = 'High Risk';
      }
    } else {
      // Email scan
      if (company) {
        finalScore = Math.min(100, Math.max(0, company.trust_score));
        finalStatus = 'Verified Employer';
      } else if (['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'].includes(domain)) {
        finalScore = 5;
        finalStatus = 'Public Email Warning';
      } else {
        finalScore = 35;
        finalStatus = 'Unverified Domain';
      }
    }

    return NextResponse.json({
      success: true,
      emailScanned: email,
      domain: domain || 'Unknown',
      trustScore: finalScore,
      status: finalStatus,
      isVerified: !!company,
      aiSummary: aiAnalysis
    });

  } catch (error: any) {
    console.error("🚨 VERIFICATION CRASH:", error.message);
    return NextResponse.json({ error: `Server Error: ${error.message}` }, { status: 500 });
  }
}
