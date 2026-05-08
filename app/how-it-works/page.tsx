import Link from 'next/link';
import { ArrowLeft, Search, ShieldCheck, UserCheck, Zap, Mail, ArrowDown } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto text-slate-900 dark:text-slate-200">
      <Link href="/" className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-8 w-fit hover:opacity-80 transition-opacity">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          How <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-cyan-300">Credify</span> Works
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We bridge the trust gap between legitimate employers and job seekers using AI and verified identity infrastructure.
        </p>
      </div>

      <div className="space-y-16 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-100 before:via-indigo-500/50 before:to-transparent dark:before:from-slate-800 dark:before:via-cyan-500/30">
        
        {/* Step 1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#0A0F1C] bg-indigo-100 dark:bg-cyan-950 text-indigo-600 dark:text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
            <BuildingIcon />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">1. Company Registration</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Legitimate companies register their official domains (e.g., @acme.com) with Credify. Our team manually verifies domain ownership and business registration before approving them.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#0A0F1C] bg-indigo-100 dark:bg-cyan-950 text-indigo-600 dark:text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
            <LinkIcon />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">2. The Verified Link</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Once verified, the company receives a permanent URL (credify.app/verify/company). Recruiters add this link to their email signatures, LinkedIn outreach, and job postings.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#0A0F1C] bg-indigo-100 dark:bg-cyan-950 text-indigo-600 dark:text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
            <UserCheck size={20} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">3. Candidate Verification</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              When a candidate receives an offer, they click the link. In under 5 seconds, they see the company's official profile and confirm the recruiter's email matches the verified domain.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#0A0F1C] bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
            <Zap size={20} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-rose-50/50 dark:bg-rose-950/20 p-6 md:p-8 rounded-3xl border border-rose-200 dark:border-rose-900/30 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-rose-900 dark:text-rose-300">4. Scam Detection</h3>
            <p className="text-rose-700/80 dark:text-rose-400/80 text-sm leading-relaxed">
              If a candidate is unsure, they upload the offer letter to our Job Scanner. Our Gemini AI analyzes the text, flags suspicious patterns (like requests for money), and stops the scam dead in its tracks.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-16">
        <h2 className="text-3xl font-black text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-white/10">
            <h4 className="font-bold mb-2">How fast is the verification process for companies?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Our manual review team processes all domain verifications within 24 hours to ensure strict quality control.</p>
          </div>
          <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-white/10">
            <h4 className="font-bold mb-2">Is the Job Scanner free for candidates?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Yes, the B2C candidate tools (Scanner, Instant Verify, Dialer App) are completely free forever. We charge employers for the verification infrastructure.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href="/job-scanner" className="inline-flex items-center gap-2 bg-indigo-600 dark:bg-cyan-500 hover:bg-indigo-700 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold py-4 px-8 rounded-xl transition-all shadow-lg">
          Try the Scanner Now <ArrowDown size={18} />
        </Link>
      </div>

    </main>
  );
}

// Simple icons for the timeline
function BuildingIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
}

function LinkIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
}
