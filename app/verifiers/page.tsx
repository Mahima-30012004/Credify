import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Zap, Building, ArrowRight } from 'lucide-react';

export default function VerifiersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0F1C] text-slate-900 dark:text-slate-200 pt-32 pb-20 px-6 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-8 w-fit hover:opacity-80 transition-opacity">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-cyan-300">Verifiers</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Credify offers a suite of powerful, AI-driven tools designed to protect you from fraudulent job offers and fake recruiters. Choose the tool that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Job Scanner */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-indigo-600 dark:text-cyan-400 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <Zap size={100} />
            </div>
            <div className="w-14 h-14 bg-indigo-100 dark:bg-cyan-950/50 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Zap size={28} className="text-indigo-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 relative z-10">Job Scanner</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow relative z-10">
              Upload a PDF offer letter or paste an email from a recruiter. Our AI will analyze the text, check for common scam patterns, and verify the sender's domain.
            </p>
            <Link href="/job-scanner" className="flex items-center gap-2 text-indigo-600 dark:text-cyan-400 font-bold hover:gap-3 transition-all w-fit relative z-10">
              Open Scanner <ArrowRight size={18} />
            </Link>
          </div>

          {/* Instant Verification */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-emerald-600 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck size={100} />
            </div>
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <ShieldCheck size={28} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 relative z-10">Instant Verify</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow relative z-10">
              Received a suspicious link? Paste any URL into Instant Verify to instantly cross-reference it against global threat intelligence and phishing databases.
            </p>
            <Link href="/instant-verify" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:gap-3 transition-all w-fit relative z-10">
              Verify a Link <ArrowRight size={18} />
            </Link>
          </div>

          {/* Company Search */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-amber-600 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <Building size={100} />
            </div>
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950/50 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Building size={28} className="text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 relative z-10">Company Search</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow relative z-10">
              Look up any company to see their TrustScore and officially verified communication channels. Never wonder if you're talking to a real employee again.
            </p>
            <Link href="/search" className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold hover:gap-3 transition-all w-fit relative z-10">
              Search Companies <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
