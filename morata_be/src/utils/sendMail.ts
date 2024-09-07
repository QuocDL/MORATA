import config from '@/config/env.config';
import { templateMail } from '@/template/Mailtemplate';
import nodemailer from 'nodemailer';
type template = {
    subject: string;
    content: {
        title?: string;
        description: string;
        warning?: string;
        email: string;
    };
    link: {
        linkName: string;
        linkHerf: string;
    };
};
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: false,
    auth: {
        user: config.nodeMailer.email,
        pass: config.nodeMailer.password,
    },
});

export const sendMail = async ({
    email,
    template,
    type,
}: {
    email: string;
    template: template;
    type: 'Verify' | 'ResetPassword' | 'UpdateStatusOrder';
}) => {
    const info = await transporter.sendMail({
        from: 'MORATA <no-reply@morata.com>',
        to: email,
        subject: `${template?.subject}`,
        html: templateMail(type, template),
        replyTo: undefined,
    });
    console.log('message send : %s', info.messageId);
};
