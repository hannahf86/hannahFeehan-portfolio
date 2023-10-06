import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind'

interface EmailTemplateProps {
    name: string;
    message: string;
    senderEmail: string;
}

export default function EmailTemplate({ name, message, senderEmail }: EmailTemplateProps) {
    return <Html>
        <Head />
        <Preview>
            New message
        </Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>You received the following message from your contact form:</Heading>
                        <Text>Sender's name: {name}</Text>
                        <Text>Sender's contact details: {senderEmail}</Text>
                        <Text>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
}
