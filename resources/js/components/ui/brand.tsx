import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Brand({ ...props }: ComponentPropsWithoutRef<'p'>) {
    return (<p className={cn('font-brand text-primary text-5xl', props.className)}>Baconfy</p>);
}
