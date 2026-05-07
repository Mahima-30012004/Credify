import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { email, userId } = body;

        if (!email || !userId) {
            return NextResponse.json({ message: 'Email and User ID are required' }, { status: 400 });
        }

        const { data, error } = await supabase
            .from('users_custom')
            .delete()
            .match({ email: email, user_id: userId });

        if (error) {
            throw error;
        }

        return NextResponse.json({ message: 'Account deleted successfully' }, { status: 200 });
    } catch (error: any) {
        console.error("Delete account error:", error);
        return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
