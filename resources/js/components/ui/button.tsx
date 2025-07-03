import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center cursor-pointer gap-1',
    {
        variants: {
            variant: {
                default: 'bg-primary text-background hover:bg-primary/90',
                destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
                outline: 'border-2 border-primary bg-transparent hover:bg-primary hover:text-background',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent',
                link: 'font-bold text-primary underline-offset-4 hover:underline'
            },
            size: {
                default: 'h-12 md:h-12 px-4 has-[>svg]:px-4',
                sm: 'h-10 rounded px-4 has-[>svg]:px-3.5',
                lg: 'h-10 rounded px-6 has-[>svg]:px-4',
                icon: 'size-9'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

function Button({ className, variant, size, asChild = false, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            {...props}
            data-slot="button"
            className={cn(
                'clickable rounded whitespace-nowrap font-bold outline-none transition-all',
                'disabled:pointer-events-none disabled:opacity-50',
                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 [&_svg]:shrink-0',
                'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
                buttonVariants({ variant, size, className })
            )}
        />
    );
}

export { Button, buttonVariants };
