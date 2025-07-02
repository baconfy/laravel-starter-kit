import * as React from 'react';
import { cn } from '@/lib/utils';

function Input({ className, type, error, ...props }: React.ComponentProps<'input'> & { error?: string; }) {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            if (inputRef.current) {
                const textLength = inputRef.current.value.length;

                if (['text', 'search', 'tel', 'url', 'password'].includes(inputRef.current.type)) {
                    inputRef.current.setSelectionRange(textLength, textLength);
                }
            }
        }, 0);

        if (props.onFocus) {
            props.onFocus(e);
        }
    };

    return (
        <>
            <input
                type={type}
                onFocus={handleFocus}
                data-slot="input"
                className={cn(
                    'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                    error ? 'border-destructive-foreground focus-visible:border-destructive-foreground focus-visible:ring-destructive-foreground/50 focus-visible:ring-[3px]' : '',
                    className
                )}
                {...props}
            />

            {error && <p className="text-xs text-destructive-foreground">{error}</p>}
        </>
    );
}

export { Input };
