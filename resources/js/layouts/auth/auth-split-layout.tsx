import { Brand } from '@/components/ui/brand';
import { Title } from '@/components/ui/title';
import { type PropsWithChildren } from 'react';

export default function AuthSplitLayout({ children, title, description }: PropsWithChildren<{ title: string; description?: string }>) {
    return (
        <div className="flex max-h-screen min-h-screen">
            <section className="flex basis-full items-center justify-center">
                <div className="w-full max-w-sm space-y-8 px-6 xl:px-0">
                    <Brand />

                    <Title title={title} description={description} />

                    <div className="space-y-4">{children}</div>
                </div>
            </section>

            <section className="hidden basis-full p-6 xl:flex">
                <div className="relative size-full overflow-hidden rounded-4xl">
                    <img src="/images/auth.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
                </div>
            </section>
        </div>
    );
}
