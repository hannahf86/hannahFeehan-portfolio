import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/Components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        console.log('body', body);

        const { name, email, message } = body;

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'hannahfeehan.dev@gmail.com',
            subject: 'Thanks for reaching out',
            react: EmailTemplate({ firstName: name }),
        });

        if (data.status === 'success') {
            return NextResponse.json({ message: 'Email sent successfully! Thank you!' });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: 'The email has not sent!' });
    }
}