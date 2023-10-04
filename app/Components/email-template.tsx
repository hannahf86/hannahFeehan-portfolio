import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <div>
        <h1>Hi, {firstName}!</h1>
        <p>Thank you for your message. I will get back to you as soon as I can.</p>
        <h3>Hannah</h3>
    </div>
);
