import React, { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export const TabLinks = ({children, ...props}: ComponentProps<'div'>) => {
    return (
        <div className={cn("inline-flex items-center justify-center md:justify-start rounded bg-accent text-accent-foreground p-2 gap-2", props.className)}>
            {children}
        </div>
    );
};

export const TabLink = ({ href, active = false, icon, children, ...props}: ComponentProps<'div'> & { href: string; active: boolean; icon: LucideIcon }) => {
    return (
        <Link href={href} className={cn(
            "w-full text-accent-foreground font-bold md:w-fit",
            "inline-flex items-center justify-center gap-x-1.5 px-4 py-2 rounded",
            {
                "text-accent bg-primary": active,
            },
            props.className
        )}>
            {React.createElement(icon, { className: "w-5 h-5" })}
            <span className="hidden md:block">{children}</span>
        </Link>
    );
};

