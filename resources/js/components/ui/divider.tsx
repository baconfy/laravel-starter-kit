import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const dividerVariants = cva(
    'w-full relative flex items-center justify-center',
    {
        variants: {
            variant: {
                default: 'text-sm'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
    text?: string;
}

function Divider({ text, variant, className, ...props }: DividerProps) {
    return (
        <div className={cn(dividerVariants({ variant }), className)} {...props}>
            <div className="flex-grow border-t border-foreground/10" />
            {text && <span className="text-center mx-2 lowercase">{text}</span>}
            <div className="flex-grow border-t border-foreground/10" />
        </div>
    );
}

export { Divider, dividerVariants };
