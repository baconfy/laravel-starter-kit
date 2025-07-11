import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function WebSimpleLayout({
    children,
    title,
    description,
    tags,
}: PropsWithChildren<{ title?: string; description?: string; tags?: string }>) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                {tags && <meta name="keywords" content={tags} />}
            </Head>

            <div className="flex max-h-screen min-h-screen flex-col items-center justify-center">{children}</div>
        </>
    );
}
