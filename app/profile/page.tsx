'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Camera, User, AlertCircle } from 'lucide-react';

export default function ProfilePage() {
  const [isClient, setIsClient] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  
  // Profile state
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'prefer-not-to-say',
    occupation: '',
    location: ''
  });
  
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const savedEmail = localStorage.getItem('credify_user');
    const savedProfile = localStorage.getItem('credify_profile_data');

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else if (savedEmail) {
      setProfile(prev => ({ ...prev, name: savedEmail.split('@')[0], email: savedEmail }));
    }
    
    const savedPic = localStorage.getItem('credify_profile_pic');
    if (savedPic) setProfilePic(savedPic);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePic(base64String);
        localStorage.setItem('credify_profile_pic', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('saving');
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('credify_profile_data', JSON.stringify(profile));
      setStatus('saved');
      window.location.href = '/';
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  if (!isClient) return null;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0A0F1C] pt-32 pb-20 px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-8 w-fit hover:opacity-80 transition-opacity">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
            <label className="relative group cursor-pointer block">
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-slate-400 border-4 border-white dark:border-slate-950 shadow-md overflow-hidden relative">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={40} />
                )}
              </div>
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={24} className="text-white" />
              </div>
            </label>
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">My Profile</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Manage your personal information. These details are completely optional and help us tailor threat alerts to your demographic.
              </p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-8">
            {/* Essential Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
                <input 
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                <input 
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm" 
                  placeholder="alex@example.com"
                />
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-cyan-950/20 p-4 rounded-xl flex gap-3 text-sm text-indigo-700 dark:text-cyan-400">
              <AlertCircle size={20} className="shrink-0" />
              <p>The following demographic data is <b>100% optional</b>. It is used anonymously to help identify scam trends targeting specific age groups or genders.</p>
            </div>

            {/* Optional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Age</label>
                <input 
                  type="number"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  min="16" max="120"
                  className="w-full p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm" 
                  placeholder="e.g. 24"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Gender</label>
                <select 
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm appearance-none" 
                >
                  <option value="prefer-not-to-say">Prefer not to say</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Occupation / Student</label>
                <input 
                  name="occupation"
                  value={profile.occupation}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm" 
                  placeholder="e.g. Software Engineer"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Location (City/Country)</label>
                <input 
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all text-sm" 
                  placeholder="e.g. London, UK"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button 
                type="submit"
                disabled={status === 'saving'}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md disabled:opacity-70"
              >
                {status === 'saving' ? 'Saving...' : status === 'saved' ? 'Saved Successfully!' : <><Save size={18} /> Save Profile</>}
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
