import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Brand({ ...props }: ComponentPropsWithoutRef<'p'>) {
    return (
        <p className={cn('font-brand font-bold text-primary text-4xl', props.className)}>Baconfy</p>
    );
}

export function BrandIcon({ ...props }: ComponentPropsWithoutRef<'p'>) {
    return (
        <div className="rounded flex items-center justify-center size-12 bg-primary/10">
            <p className={cn('font-brand font-bold text-primary text-3xl', props.className)}>B.</p>
        </div>
    );
}
