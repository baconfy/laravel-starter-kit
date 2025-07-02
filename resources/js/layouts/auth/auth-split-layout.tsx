import { Brand } from '@/components/ui/brand';
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AuthSplitLayout({
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

            <div className="flex max-h-screen min-h-screen">
                <section className="flex basis-full items-center justify-center">
                    <div className="w-full max-w-sm space-y-8">
                        <div>
                            <Brand />
                        </div>

                        <div>
                            <h1 className="font-title text-2xl font-bold">{title}</h1>
                            <small className="text-base font-normal">{description}</small>
                        </div>

                        <div className="space-y-4">{children}</div>
                    </div>
                </section>

                <section className="hidden basis-full p-8 xl:flex">
                    <div className="relative size-full overflow-hidden rounded-4xl">
                        <img src="/images/auth.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                </section>
            </div>
        </>
    );
}
