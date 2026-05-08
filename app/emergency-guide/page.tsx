import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Phone, ShieldAlert, CreditCard } from 'lucide-react';

export default function EmergencyGuidePage() {
  return (
    <main className='min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto text-slate-900 dark:text-slate-200'>
      <Link href='/' className='flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-8 w-fit hover:opacity-80 transition-opacity'>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle size={32} className="text-rose-600 dark:text-rose-500" />
        <h1 className='text-4xl md:text-5xl font-black'>Emergency Guide</h1>
      </div>
      
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
        If you suspect you have been targeted by a job scam, or have already sent money/personal information to a fake recruiter, follow these steps immediately to protect yourself.
      </p>

      <div className="space-y-8">
        
        <div className="bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20 rounded-2xl p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-rose-700 dark:text-rose-400 mb-4">
            <CreditCard size={20} /> 1. Stop All Payments
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li>Do not send any more money. Scammers often claim you need to pay a "processing fee" or "tax" to get your money back. It is a lie.</li>
            <li>If you paid via credit/debit card, contact your bank immediately and request a chargeback for fraud.</li>
            <li>If you sent crypto or gift cards, the money is likely gone, but you should still report it to the platform.</li>
          </ul>
        </div>

        <div className="bg-indigo-50 dark:bg-cyan-950/20 border border-indigo-100 dark:border-cyan-900/50 rounded-2xl p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-indigo-700 dark:text-cyan-400 mb-4">
            <ShieldAlert size={20} /> 2. Secure Your Identity
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li>If you provided your ID (passport, driver's license), contact your local authorities to report identity theft.</li>
            <li>If you gave them your passwords, change them immediately on all accounts that use the same password. Enable 2FA (Two-Factor Authentication).</li>
            <li>Freeze your credit. Contact major credit bureaus to place a freeze on your credit report to stop scammers from opening loans in your name.</li>
          </ul>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-amber-800 dark:text-amber-400 mb-4">
            <AlertTriangle size={20} /> 4. Communication Templates
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">Use these templates to notify your bank and the real company immediately:</p>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30">
              <h3 className="text-xs font-bold uppercase text-amber-600 dark:text-amber-500 mb-2">To Your Bank</h3>
              <p className="text-sm font-mono text-slate-600 dark:text-slate-400">"I have been the victim of a fraudulent job scam. On [Date], I authorized a transaction of [Amount] under false pretenses. I urgently request a freeze on my account and wish to file a fraud chargeback dispute for this transaction."</p>
            </div>
            <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30">
              <h3 className="text-xs font-bold uppercase text-amber-600 dark:text-amber-500 mb-2">To The Real Company (via their official site)</h3>
              <p className="text-sm font-mono text-slate-600 dark:text-slate-400">"I am writing to report that someone is impersonating your HR department. They contacted me from [Fake Email/Number] offering a job at [Company Name]. I wanted to bring this to your security team's attention."</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
            <Phone size={20} /> 5. Report the Scam
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li>Report the fraudulent job posting to the platform where you found it (e.g., LinkedIn, Indeed, Telegram).</li>
            <li>File a report with your national cybercrime reporting center (e.g., IC3 in the US, Action Fraud in the UK, or the equivalent cyber police portal in your country).</li>
            <li>Warn others by submitting the scam details to the Credify intelligence database.</li>
          </ul>
        </div>
        
        <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">
            Remember: You Are Not Alone
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            Job scams are highly sophisticated operations run by professional syndicates. They prey on the stress of job hunting. Do not blame yourself. Talk to a trusted friend or family member, and consider reaching out to local victim support services if you are feeling overwhelmed.
          </p>
        </div>

      </div>
    </main>
  );
}
