<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/shield-check.svg" alt="Credify Logo" width="120" height="120" />
  <h1>Credify</h1>
  <p><strong>The Trust Infrastructure for Modern Hiring</strong></p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#architecture">Architecture</a>
  </p>
</div>

---

## 🛡️ The Trust Gap in Hiring
**40% of candidates** ignore legitimate recruiter messages because they can't tell real from fake. **1 in 8** online job offers in Southeast Asia is fraudulent. 

**Credify** is a dual-sided platform designed to eliminate the job scam epidemic. We provide defensive AI verification tools for candidates, and proactive identity infrastructure for legitimate employers.

---

## ✨ Core Features

### For Candidates (B2C)
*   🧠 **AI Job Scanner**: Upload a PDF offer letter or paste recruiter emails. Our Gemini 2.5 Flash AI performs forensic analysis to detect red flags and assigns a TrustScore.
*   🔗 **Instant Verification**: Paste any URL to instantly cross-reference it against threat intelligence databases (ready for VirusTotal/Safe Browsing integration).
*   📱 **GuardianDialer App**: An Android companion app that provides real-time alerts and smart call blocking for known fraudulent recruiter numbers.
*   💻 **Chrome Extension (Beta)**: In-line verification that automatically scans and flags suspicious job offer emails directly inside your Gmail inbox.
*   📰 **Live Threat Intelligence**: A dynamic feed of the latest cybersecurity and scam news fetched via the Dev.to API.
*   🆘 **Emergency Guide**: Step-by-step actionable advice and copy-paste communication templates for victims who have already been compromised.

### For Employers (B2B)
*   🏢 **Verifiable Identity Links**: Companies get a permanent, verified URL (e.g., `credify.app/verify/acme-corp`).
*   ⚡ **Instant Trust**: Candidates can click the link in a recruiter's email signature or LinkedIn InMail to instantly verify their legitimacy in under 5 seconds.
*   🚫 **Impersonation Defense**: Dynamic TrustScore engine automatically flags scammers who attempt to copy the verified link onto fake domains.

---

## 🛠️ Tech Stack

*   **Frontend**: [Next.js 14](https://nextjs.org/) (App Router) with React
*   **Styling**: Tailwind CSS & Vanilla CSS (Dark/Light mode support)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Backend & Database**: [Supabase](https://supabase.com/) (PostgreSQL & Row Level Security)
*   **AI Engine**: Google AI Studio ([Gemini 2.5 Flash](https://aistudio.google.com/))
*   **Upcoming Integrations**: VirusTotal API, Resend (Email Infrastructure)

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18+)
*   A Supabase project
*   A Google AI Studio (Gemini) API Key

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/credify.git
   cd credify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Database Setup**
   Run the SQL commands found in `supabase_setup.sql` in your Supabase SQL Editor to provision the necessary tables and RLS policies.

5. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see the application running.

---

## 🔒 Security & Demo Notes
*   **API Security**: All sensitive keys (Gemini, Supabase) are managed via `process.env`.
*   **Mock Demo Experience**: For the current preview version, authentication and profile persistence are handled via a robust `localStorage` simulation. This allows for a full end-to-end demo (Signup -> Login -> Profile Edit -> Settings) without requiring a live database connection, ensuring immediate portability.
*   **Data Protection**: User input is sanitized before processing through the Gemini AI forensic engine to prevent prompt injection.

<div align="center">
  <i>Building a safer internet, one job offer at a time.</i>
</div>
