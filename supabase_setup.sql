-- 1. Create the verified_companies table
CREATE TABLE IF NOT EXISTS public.verified_companies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    domain TEXT UNIQUE NOT NULL,
    company_name TEXT NOT NULL,
    trust_score INTEGER NOT NULL CHECK (trust_score >= 0 AND trust_score <= 100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Insert dummy test data
INSERT INTO public.verified_companies (domain, company_name, trust_score)
VALUES 
    ('google.com', 'Google LLC', 99),
    ('microsoft.com', 'Microsoft Corporation', 98),
    ('amazon.com', 'Amazon.com, Inc.', 95),
    ('apple.com', 'Apple Inc.', 97)
ON CONFLICT (domain) DO NOTHING;

-- 3. Create Custom Users Table
CREATE TABLE IF NOT EXISTS public.users_custom (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    backup_email TEXT,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.verified_companies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON public.verified_companies FOR SELECT USING (true);

ALTER TABLE public.users_custom ENABLE ROW LEVEL SECURITY;
-- For users_custom, only allow inserting and selecting by anon API if you want it to be fully public
-- In a real production app, you would restrict this heavily.
CREATE POLICY "Allow public insert to users" ON public.users_custom FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read to users" ON public.users_custom FOR SELECT USING (true);
CREATE POLICY "Allow public update to users" ON public.users_custom FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Allow public delete to users" ON public.users_custom FOR DELETE USING (true);

