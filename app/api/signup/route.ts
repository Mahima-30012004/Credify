import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, backupEmail } = body;

        if (!email || !password) {
            return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
        }

        // Generate a random User ID (e.g., credify_a1b2c3)
        const userId = 'credify_' + Math.random().toString(36).substring(2, 8);

        // Check if user already exists
        const { data: existingUser, error: selectError } = await supabase
            .from('users_custom')
            .select('*')
            .or(`email.eq.${email},user_id.eq.${userId}`)
            .single();

        if (selectError && selectError.code !== 'PGRST116') {
            if (selectError.code === '42P01') {
                console.log("⚠️ Database missing. Falling back to MOCK Sign Up.");
                return NextResponse.json({
                    message: 'User created successfully (MOCK MODE)',
                    user: { id: 'mock-uuid-123', email: email, userId: userId }
                }, { status: 201 });
            }
        }

        if (existingUser) {
            if (existingUser.email === email) {
                return NextResponse.json({ message: 'Email already exists' }, { status: 409 });
            } else {
                return NextResponse.json({ message: 'User ID already exists' }, { status: 409 });
            }
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const { data: newUser, error } = await supabase
            .from('users_custom')
            .insert([
                { 
                    email, 
                    user_id: userId, 
                    backup_email: backupEmail || null, 
                    password_hash: hashedPassword 
                }
            ])
            .select()
            .single();

        if (error) {
            if (error.code === '42P01') {
                return NextResponse.json({ message: 'Please create the users_custom table in Supabase first!' }, { status: 500 });
            }
            throw error;
        }

        return NextResponse.json({
            message: 'User created successfully',
            user: { id: newUser.id, email: newUser.email, userId: newUser.user_id }
        }, { status: 201 });

    } catch (error: any) {
        console.error("Signup error:", error);
        return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
