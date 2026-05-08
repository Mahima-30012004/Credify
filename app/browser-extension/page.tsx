import Link from 'next/link';
import { ArrowLeft, Monitor, ShieldCheck, Zap, DownloadCloud } from 'lucide-react';

export default function BrowserExtensionPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto text-slate-900 dark:text-slate-200">
      <Link href="/" className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-8 w-fit hover:opacity-80 transition-opacity">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-cyan-950/30 border border-indigo-100 dark:border-cyan-500/30 text-indigo-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Monitor size={14} /> Chrome Extension
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Protection right in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-cyan-300">
              your inbox.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Don't waste time manually copying and pasting emails into the scanner. The Credify Chrome Extension automatically flags suspicious job offers directly inside Gmail and LinkedIn.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">In-line Verification</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">See a green checkmark next to verified recruiters directly in your Gmail inbox.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center shrink-0">
                <Zap size={20} className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Auto-Scan Attachments</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Hover over PDF offer letters to get an instant AI TrustScore without downloading them.</p>
              </div>
            </div>
          </div>

          <button 
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:opacity-90"
          >
            <DownloadCloud size={20} /> Add to Chrome (Beta)
          </button>
          <p className="text-xs text-slate-500 mt-4">Currently in private beta. Requires Google Chrome 88+.</p>
        </div>

        {/* Mock UI showing Gmail extension */}
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/10 dark:bg-cyan-500/10 blur-[100px] rounded-[3rem]"></div>
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Browser Header */}
            <div className="bg-slate-100 dark:bg-slate-950 p-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <div className="flex gap-1.5 px-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 bg-white dark:bg-slate-900 rounded-md text-[10px] text-center py-1 text-slate-500">mail.google.com</div>
            </div>
            
            {/* Email UI */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-lg">Job Offer: Software Engineer</h3>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">HR Department</span>
                    <span className="text-xs text-slate-500">&lt;careers@google-hiring-portal.com&gt;</span>
                  </div>
                  <span className="text-xs text-slate-500">to me</span>
                </div>
              </div>

              {/* The Extension Overlay */}
              <div className="mb-6 p-4 rounded-xl border border-rose-200 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-900/50 flex gap-4 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                  <h4 className="font-bold text-rose-800 dark:text-rose-300 text-sm mb-1">Credify Warning: Impersonation Detected</h4>
                  <p className="text-xs text-rose-700/80 dark:text-rose-400/80 leading-relaxed">
                    This sender's domain (google-hiring-portal.com) is unregistered and attempts to mimic Google. Do not click links or reply.
                  </p>
                </div>
              </div>

              <div className="space-y-2 opacity-50 blur-[1px]">
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
