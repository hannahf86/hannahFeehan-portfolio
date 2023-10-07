'use server'
import React from 'react';

// EMAIL FUNCTIONS
import { Resend } from 'resend';
import EmailTemplate from '@/app/Components/Email/email-template';

// HELPERS
import { validateString } from '@/app/utils';
import { getErrorMessage } from '@/app/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const name = formData.get('name');
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    console.log(senderEmail);

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid email address'
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        }
    }

    let data; // to get error data from RESEND directly

    try {
        // asserted for speed
        data = await resend.emails.send({
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
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }
    return {
        data,
    }
}