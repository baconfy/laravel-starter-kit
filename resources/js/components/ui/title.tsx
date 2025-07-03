import React from 'react';
import { Head } from '@inertiajs/react';

export function Title({ children, title, description }: { children?: React.ReactNode; title: string; description?: string }) {
    return (
        <>
            <Head title={title} />

            {children
                ? (
                    <div className="flex flex-col items-start md:items-center md:justify-between md:flex-row gap-4">
                        <div className="grow space-y-0 md:space-y-2">
                            <h1 className="font-title font-bold text-2xl md:text-4xl md:tracking-tight">{title}</h1>
                            {description && <p className="text-sm md:text-base text-muted-foreground font-sans font-normal">{description}</p>}
                        </div>

                        <div className="flex flex-col md:flex-row md:shrink gap-4">{children}</div>
                    </div>
                )
                : (
                    <div className="space-y-0 md:space-y-2">
                        <h1 className="font-title font-bold text-2xl md:text-4xl md:tracking-tight">{title}</h1>
                        {description && <p className="text-sm md:text-base text-muted-foreground font-sans font-normal">{description}</p>}
                    </div>
                )
            }
        </>
    );
}
