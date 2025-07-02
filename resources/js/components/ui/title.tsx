import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Title({ title, description, ...props }: ComponentPropsWithoutRef<'div'> & { title: string; description?: string }) {
    return (
        <div className={cn(props.className)}>
            <h1>{title}</h1>
            {description && <small>{description}</small>}
        </div>
    );
}
