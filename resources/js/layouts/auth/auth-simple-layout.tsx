import { Brand } from '@/components/ui/brand';
import { Title } from '@/components/ui/title';
import { type PropsWithChildren } from 'react';

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<{ title: string; description?: string }>) {
    return (
        <div className="flex max-h-screen min-h-screen items-center justify-center">
            <div className="w-full max-w-sm space-y-8">
                <div>
                    <Brand />
                </div>

                <Title title={title} description={description} />

                <div className="space-y-4">{children}</div>
            </div>
        </div>
    );
}
