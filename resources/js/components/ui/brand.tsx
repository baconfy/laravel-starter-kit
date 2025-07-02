import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Brand({...props}: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn("flex items-center justify-center font-bold max-w-fit text-3xl", props.className)} {...props}>
            <div className="text-primary">Bacon</div>
            <div className="text-foreground">fy</div>
        </div>
    );
}
