'use client'; // Required to use React hooks and event listeners in Next.js

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  // Track input values and loading/error states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsLoading(true);
    setError('');

    try {
      // Simulate network request for mock frontend
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const usersDbStr = localStorage.getItem('credify_users_db');
      const usersDb = usersDbStr ? JSON.parse(usersDbStr) : {};
      
      const normalizedEmail = email.trim();
      const normalizedPassword = password.trim();

      // Check if user exists and password matches
      if (!usersDb[normalizedEmail]) {
        throw new Error('Account not found. Please sign up first.');
      } else if (usersDb[normalizedEmail] !== normalizedPassword) {
        throw new Error('Incorrect password. Please try again.');
      }
      
      // Save simulated user session
      localStorage.setItem('credify_user', normalizedEmail);
      
      console.log('Mock login successful:', email);
      
      // Redirect user to the main page
      window.location.href = '/';

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
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-6">Welcome Back</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Sign in to report scams and track verifications.</p>
        </div>

        {/* Notice the onSubmit handler here */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          {/* Display error message if login fails */}
          {error && (
            <div className="p-3 bg-red-100 text-red-600 border border-red-200 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Email or User ID</label>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@college.edu or john_doe99" 
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
          <div className="flex justify-end mt-1">
            <Link href="/reset-password" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Changed type to "submit" so hitting Enter on the keyboard works */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-md mt-4"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Don't have an account? <Link href="/signup" className="text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer hover:underline">Sign up</Link>
        </p>
      </div>
    </main>
  );
}