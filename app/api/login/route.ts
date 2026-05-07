import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // identifier can be either email or userID
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ message: 'Email/UserID and password are required' }, { status: 400 });
        }

        // --- HARDCODED MOCK LOGIN ---
        if ((email === 'admin@credify.com' || email === 'credify_admin') && password === 'password123') {
            return NextResponse.json({
                message: 'Login successful',
                user: { id: 1, email: 'admin@credify.com', userId: 'credify_admin' }
            }, { status: 200 });
        }

        // Fetch user from database matching either email or user_id
        const { data: user, error } = await supabase
            .from('users_custom')
            .select('*')
            .or(`email.eq.${email},user_id.eq.${email}`)
            .single();

        if (error) {
            if (error.code === '42P01') {
                console.log("⚠️ Database missing. Falling back to MOCK Log In.");
                // Let them in using whatever they typed, or specifically admin
                return NextResponse.json({
                    message: 'Login successful (MOCK MODE)',
                    user: { id: 'mock-uuid-123', email: email, userId: 'mock_user' }
                }, { status: 200 });
            }
            if (error.code !== 'PGRST116') {
                 console.error("Login select error:", error);
            }
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }
        
        if (!user) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (isMatch) {
            return NextResponse.json({
                message: 'Login successful',
                user: { id: user.id, email: user.email, userId: user.user_id }
            }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

    } catch (error: any) {
        console.error("Login error:", error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}