'use server'

import React from 'react';
import { validateString } from '@/utils';
import { Resend } from 'resend';
import EmailTemplate from '@/app/Components/email-template';


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const name = formData.get('name');
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid email address'
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid email address'
        }
    }

    // asserted for speed
    await resend.emails.send({
        from: 'Contact form <onboarding@resend.dev>',
        to: 'hannahfeehan.dev@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail as string,
        react: React.createElement(EmailTemplate, {
            name: name as string,
            message: message as string,
            senderEmail: senderEmail as string,
        })
    })
}