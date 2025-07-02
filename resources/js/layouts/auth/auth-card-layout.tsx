import { Brand } from '@/components/ui/brand';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AuthCardLayout({
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

            <div className="flex max-h-screen min-h-screen items-center justify-center">
                <div className="w-full max-w-md space-y-8">
                    <div className="flex items-center justify-center">
                        <Brand />
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="font-title text-2xl font-bold">{title}</CardTitle>
                            <CardDescription className="text-base font-normal">{description}</CardDescription>
                        </CardHeader>

                        <CardContent>{children}</CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
