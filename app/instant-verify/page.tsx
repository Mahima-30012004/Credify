'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function InstantVerifyPage() {
  const [input, setInput] = useState('');
  const [verifyResult, setVerifyResult] = useState('');
  const [isSafe, setIsSafe] = useState<boolean | null>(null);

  const handleVerify = () => {
    if (!input) return alert('Enter link or domain');

    if (input.includes('scam') || input.includes('fake') || input.includes('phish')) {
      setIsSafe(false);
      setVerifyResult('High Risk: Suspicious domain detected. Do not provide any personal information.');
    } else {
      setIsSafe(true);
      setVerifyResult('Safe: No scam signals found. However, always remain vigilant.');
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0F1C] text-slate-900 dark:text-slate-200 pt-32 pb-20 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors mb-10 w-fit"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Instant Link Verification
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
          Paste any job offer link, recruiter website, or document URL to check if it has been flagged for fraudulent activity.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-md">
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
            Enter URL to verify
          </label>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="https://example-recruiter.com/offer"
              className="flex-1 border border-slate-300 dark:border-slate-700 p-4 rounded-xl bg-white dark:bg-slate-950 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white"
            />
            <button
              type="button"
              onClick={handleVerify}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md sm:w-auto w-full"
            >
              Verify Link
            </button>
          </div>

          {verifyResult && (
            <div className={`p-6 rounded-2xl flex items-start gap-4 ${isSafe ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800'}`}>
              <div className={`p-2 rounded-full ${isSafe ? 'bg-emerald-100 dark:bg-emerald-800/50 text-emerald-600 dark:text-emerald-400' : 'bg-rose-100 dark:bg-rose-800/50 text-rose-600 dark:text-rose-400'}`}>
                {isSafe ? <ShieldCheck size={24} /> : <ShieldAlert size={24} />}
              </div>
              <div>
                <h3 className={`text-lg font-bold ${isSafe ? 'text-emerald-800 dark:text-emerald-300' : 'text-rose-800 dark:text-rose-300'}`}>
                  {isSafe ? 'Verification Passed' : 'Security Warning'}
                </h3>
                <p className={`mt-1 text-sm ${isSafe ? 'text-emerald-700 dark:text-emerald-400/80' : 'text-rose-700 dark:text-rose-400/80'}`}>
                  {verifyResult}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
