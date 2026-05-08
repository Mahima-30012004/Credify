import Link from 'next/link';
import { Smartphone, ShieldCheck, BellRing, PhoneOff, Download, ArrowLeft } from 'lucide-react';

export default function GetAppPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto text-slate-900 dark:text-slate-200">
      <Link href="/" className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-8 w-fit hover:opacity-80 transition-opacity">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-cyan-950/30 border border-indigo-100 dark:border-cyan-500/30 text-indigo-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Smartphone size={14} /> Android App
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Take your security <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-cyan-300">
              on the go.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Scammers don't just use email—they use WhatsApp, SMS, and direct phone calls. 
            GuardianDialer intercepts known fraudulent recruiter numbers before they even reach you.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center shrink-0">
                <PhoneOff size={20} className="text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Smart Call Blocking</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Automatically blocks numbers flagged in our global threat database.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center shrink-0">
                <BellRing size={20} className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Real-time Alerts</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Get instant warnings when you receive SMS links from unverified sources.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Verify Anywhere</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Scan links and documents directly from your phone's share menu.</p>
              </div>
            </div>
          </div>

          <a 
            href="/V2_GuardianDialer.apk" 
            download="V2_GuardianDialer.apk"
            className="inline-flex items-center gap-2 bg-indigo-600 dark:bg-cyan-500 hover:bg-indigo-700 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            <Download size={20} /> Download APK (v2.0)
          </a>
          <p className="text-xs text-slate-500 mt-4">Requires Android 8.0 or higher. iOS coming soon.</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/10 dark:bg-cyan-500/10 blur-[100px] rounded-full"></div>
          <div className="relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-4 shadow-2xl max-w-sm mx-auto overflow-hidden">
            <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] h-[600px] border border-slate-100 dark:border-slate-800 flex flex-col p-6 relative overflow-hidden">
              {/* Mock App UI */}
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-sm">9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                  <div className="w-6 h-4 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                </div>
              </div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <PhoneOff size={32} className="text-rose-600 dark:text-rose-400" />
                </div>
                <h2 className="text-xl font-bold text-rose-600 dark:text-rose-400 mb-1">Scam Alert</h2>
                <p className="text-sm text-slate-500">+1 (555) 019-2834</p>
                <div className="inline-block mt-2 px-2 py-1 bg-rose-50 dark:bg-rose-500/10 text-rose-600 text-[10px] font-bold uppercase rounded text-center">
                  Flagged as Fake Recruiter
                </div>
              </div>
              <div className="mt-auto space-y-4">
                <button className="w-full py-4 bg-rose-600 text-white rounded-2xl font-bold">Block & Report</button>
                <button className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold">Ignore Warning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
