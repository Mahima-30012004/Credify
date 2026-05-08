'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [backupEmail, setBackupEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedUserId, setGeneratedUserId] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockUserId = 'USER_' + Math.random().toString(36).substr(2, 9).toUpperCase();
      
      const normalizedEmail = email.trim();
      const normalizedPassword = password.trim();
      
      // Refactored mock database: object { email: password }
      const usersDbStr = localStorage.getItem('credify_users_db');
      const usersDb = usersDbStr ? JSON.parse(usersDbStr) : {};
      
      if (usersDb[normalizedEmail]) {
        throw new Error('Account with this email already exists.');
      }
      
      // Add new user
      usersDb[normalizedEmail] = normalizedPassword;
      localStorage.setItem('credify_users_db', JSON.stringify(usersDb));
      
      // Cleanup old legacy keys
      localStorage.removeItem('credify_registered_users');
      localStorage.removeItem('credify_mock_password');
      
      // Save profile data immediately
      localStorage.setItem('credify_profile_data', JSON.stringify({
        name: name,
        email: normalizedEmail,
        age: '',
        gender: 'prefer-not-to-say',
        occupation: '',
        location: ''
      }));

      setGeneratedUserId(mockUserId);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight cursor-pointer">
            Credify.
          </Link>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-6">Create Account</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Join to start verifying job offers.</p>
        </div>

        {generatedUserId ? (
          <div className="flex flex-col items-center gap-6 animate-in zoom-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Account Created!</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Please save your auto-generated User ID. You will need it to log in securely.</p>
            </div>
            
            <div className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl text-center">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Your User ID</p>
              <p className="text-2xl font-mono font-bold text-indigo-600 dark:text-cyan-400 tracking-wider select-all">{generatedUserId}</p>
            </div>

            <button 
              onClick={() => router.push('/login')}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md mt-4"
            >
              Continue to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            {error && (
              <div className="p-3 bg-red-100 text-red-600 border border-red-200 rounded-xl text-sm text-center">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Alex Doe" 
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@college.edu" 
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Backup Email (Optional)</label>
            <input 
              type="email" 
              value={backupEmail}
              onChange={(e) => setBackupEmail(e.target.value)}
              placeholder="backup@example.com" 
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••" 
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-all"
            />
          </div>
          
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-md mt-4"
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
        )}

        {!generatedUserId && (
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
            Already have an account? <Link href="/login" className="text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer hover:underline">Sign in</Link>
          </p>
        )}
      </div>
    </main>
  );
}
