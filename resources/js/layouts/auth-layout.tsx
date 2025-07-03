import AuthLayoutTemplate from '@/layouts/auth/auth-split-layout';
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AuthLayout({
    children,
    title,
    description,
    tags,
    ...props
}: PropsWithChildren<{ title: string; description?: string; tags?: string }>) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                {tags && <meta name="keywords" content={tags} />}
            </Head>

            <AuthLayoutTemplate title={title} description={description} {...props}>
                {children}
            </AuthLayoutTemplate>
        </>
    );
}
