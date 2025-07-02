import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AppLayout({
    children,
    title,
    description,
    tags,
    ...props
}: PropsWithChildren<{ title?: string; description?: string; tags?: string }>) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                {tags && <meta name="keywords" content={tags} />}
            </Head>

            <AppLayoutTemplate title={title} description={description} {...props}>
                {children}
            </AppLayoutTemplate>
        </>
    );
}
