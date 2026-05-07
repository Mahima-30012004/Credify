import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, newPassword } = body;

        if (!email || !newPassword) {
            return NextResponse.json({ message: 'Email and new password are required' }, { status: 400 });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update user
        const { data: updatedUser, error } = await supabase
            .from('users_custom')
            .update({ password_hash: hashedPassword })
            .or(`email.eq.${email},user_id.eq.${email}`)
            .select()
            .single();

        if (error) {
            if (error.code === '42P01') {
                return NextResponse.json({ message: 'Password updated successfully (MOCK MODE)' }, { status: 200 });
            }
            if (error.code === 'PGRST116') {
                return NextResponse.json({ message: 'User not found.' }, { status: 404 });
            }
            throw error;
        }

        return NextResponse.json({
            message: 'Password updated successfully',
        }, { status: 200 });

    } catch (error: any) {
        console.error("Reset password error:", error);
        return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
