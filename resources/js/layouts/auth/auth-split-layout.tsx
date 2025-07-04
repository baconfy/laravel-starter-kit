import { Brand } from '@/components/ui/brand';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AuthSplitLayout({ children, title, description }: PropsWithChildren<{ title: string; description?: string }>) {
    return (
        <div className="flex max-h-screen min-h-screen">
            <section className="flex basis-full items-center justify-center">
                <div className="w-full max-w-sm space-y-16 px-6 xl:px-0">
                    <Link href={route('welcome')} className="block max-w-fit">
                        <Brand className="text-4xl" />
                    </Link>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h1 className="font-title text-3xl font-bold tracking-tight">{title}</h1>
                            <p className="text-muted-foreground">{description}</p>
                        </div>

                        {children}
                    </div>
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
