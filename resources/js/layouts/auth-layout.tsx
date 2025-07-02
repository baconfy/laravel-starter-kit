import AuthLayoutTemplate from '@/layouts/auth/auth-split-layout';
import { type PropsWithChildren } from 'react';

export default function AuthLayout({ children, title, description, ...props }: PropsWithChildren<{ title?: string; description?: string }>) {
    return (
        <AuthLayoutTemplate title={title} description={description} {...props}>
            {children}
        </AuthLayoutTemplate>
    );
}
