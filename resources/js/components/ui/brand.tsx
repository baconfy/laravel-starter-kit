import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Brand({ ...props }: ComponentPropsWithoutRef<'p'>) {
    return (<p className={cn('font-brand font-bold text-primary tracking-tight text-4xl', props.className)}>Baconfy</p>);
}
