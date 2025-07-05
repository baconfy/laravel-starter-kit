import { ComponentPropsWithoutRef, useId } from 'react';
import { cn } from '@/lib/utils';

export function PlaceholderPattern({ ...props }: ComponentPropsWithoutRef<'div'>) {
    const patternId = useId();

    return (
        <div className={cn('relative overflow-hidden rounded border border-muted-foreground/25', props.className)}>
            <svg className="absolute inset-0 size-full stroke-muted-foreground/50 stroke-2" fill="none">
                <defs>
                    <pattern id={patternId} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                    </pattern>
                </defs>
                <rect stroke="none" fill={`url(#${patternId})`} width="100%" height="100%"></rect>
            </svg>
        </div>
    );
}
