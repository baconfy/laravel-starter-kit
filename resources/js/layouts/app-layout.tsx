import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AppLayout({ children, title, description, ...props }: PropsWithChildren<{ title?: string; description?: string }>) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
            </Head>

            <AppLayoutTemplate {...props}>{children}</AppLayoutTemplate>
        </>
    );
}
