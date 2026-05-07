'use client';

import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';

export default function HelpCenterPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <main className='min-h-screen pt-32 pb-20 px-6 max-w-2xl mx-auto text-slate-900 dark:text-slate-200'>
      <Link href='/' className='flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-8 w-fit hover:opacity-80 transition-opacity'>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <h1 className='text-4xl md:text-5xl font-black mb-4'>Help Center</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
        Got a suggestion, encountered a problem, or need assistance? Send us a message below and our support team will get back to you shortly.
      </p>

      {status === 'success' ? (
        <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl p-8 text-center animate-in fade-in duration-500">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send size={24} className="text-emerald-600 dark:text-emerald-400 ml-1" />
          </div>
          <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">Message Sent!</h2>
          <p className="text-emerald-700 dark:text-emerald-500/80 mb-6">Thank you for reaching out. We will respond to your email as soon as possible.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">Your Name</label>
                <input 
                  id="name" 
                  type="text" 
                  required
                  placeholder="Alex Doe" 
                  className="w-full p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">Email Address</label>
                <input 
                  id="email" 
                  type="email" 
                  required
                  placeholder="alex@example.com" 
                  className="w-full p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="topic" className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">Topic</label>
              <select 
                id="topic" 
                required
                defaultValue=""
                className="w-full p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm appearance-none" 
              >
                <option value="" disabled>Select a topic...</option>
                <option value="suggestion">Feature Suggestion</option>
                <option value="bug">Report a Bug / Problem</option>
                <option value="account">Account Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">Message</label>
              <textarea 
                id="message" 
                required
                placeholder="How can we help you?" 
                rows={5}
                className="w-full p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm resize-none" 
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-indigo-600 dark:bg-cyan-500 hover:bg-indigo-700 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold py-4 px-6 rounded-2xl transition-all shadow-lg flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
            
          </div>
        </form>
      )}
    </main>
  );
}
