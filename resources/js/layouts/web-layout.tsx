import WebLayoutTemplate from '@/layouts/web/web-simple-layout';
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function WebLayout({ children, title, description, tags, ...props }: PropsWithChildren<{ title?: string; description?: string; tags?: string }>) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                {tags && <meta name="keywords" content={tags} />}
            </Head>

            <WebLayoutTemplate title={title} description={description} {...props}>
                {children}
            </WebLayoutTemplate>
        </>
    );
}
