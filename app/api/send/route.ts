import * as React from 'react';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/Components/Email/template';

const resend = new Resend('re_123456789');

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['hannahfeehan.dev@gmail.com'],
            subject: 'MESSAGE FROM CONTACT FORM:',
            react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}