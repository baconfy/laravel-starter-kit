import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
    return (
        <CheckboxPrimitive.Root className={cn(
            'peer rounded border-input cursor-pointer transition-all appearance-none outline-none shrink-0 size-5 border-2',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2',
            'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
            className
        )} {...props}>
            <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-background')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

export { Checkbox };






