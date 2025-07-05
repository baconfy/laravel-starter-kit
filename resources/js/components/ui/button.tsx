import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

const buttonVariants = cva(
    'inline-flex items-center justify-center cursor-pointer transition-all duration-100 gap-1',
    {
        variants: {
            variant: {
                ghost: 'hover:bg-accent',
                link: 'font-bold text-primary underline-offset-4 hover:underline',
                default: 'bg-button text-button-foreground hover:bg-button/90',
                primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
                outline: 'border-2 border-button bg-transparent text-button hover:bg-button hover:text-button-foreground',
                destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
            },
            size: {
                default: 'rounded-sm h-12 md:h-14 px-6 has-[>svg]:px-4',
                sm: 'rounded-xs h-10 px-4 has-[>svg]:px-3.5',
                xs: 'rounded-xs text-sm h-8 px-4 has-[>svg]:px-3.5',
                lg: 'rounded-lg h-10 px-6 has-[>svg]:px-4',
                icon: 'size-9'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

function Button({ className, variant, size, processing = false, asChild = false, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean; processing?: boolean; }) {
    const Comp = asChild ? Slot : 'button';

    props.disabled = processing;

    return (
        <Comp
            {...props}
            data-slot="button"
            className={cn(
                'clickable rounded w-full whitespace-nowrap font-bold outline-none transition-all',
                'disabled:pointer-events-none disabled:opacity-50',
                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 [&_svg]:shrink-0',
                'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
                buttonVariants({ variant, size, className })
            )}
        >
            <div className="flex items-center justify-center gap-1">
                {processing && <LoaderCircle className="size-6 animate-spin" />}
                {props.children}
            </div>
        </Comp>
    );
}

export { Button, buttonVariants };
