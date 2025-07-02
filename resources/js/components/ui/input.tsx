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
                    "transition-all outline-none",
                    "rounded flex w-full min-w-0 h-12 px-3 xl:h-14 xl:px-4",
                    "ring-2 ring-input/15 bg-input/15 text-input text-base font-bold",
                    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                    "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
                    "focus-visible:ring-input",
                    "selection:bg-primary selection:text-primary-foreground",
                    "placeholder:text-input-foreground/50",
                    "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
                    error ? 'ring-destructive-foreground focus-visible:ring-destructive-foreground focus-visible:ring-destructive-foreground/50' : '',
                    className
                )}
                {...props}
            />

            {error && <small className="text-xs text-destructive-foreground m-1">{error}</small>}
        </>
    );
}

export { Input };




//     '',
//     '',
