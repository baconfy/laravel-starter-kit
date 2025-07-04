import { cn } from '@/lib/utils';
import React from 'react';

export const Heading = ({ title, description, ...props }: React.ComponentProps<'h1'> & { title: string; description: string }) => {
    return (
        <div>
            <h1 className={cn('font-title text-3xl font-bold tracking-tight', props.className)}>{title}</h1>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
};

export const HeadingLarge = ({ title, description, ...props }: React.ComponentProps<'h1'> & { title: string; description: string }) => {
    return <Heading title={title} description={description} className={cn('mb-2 text-5xl', props.className)} />;
};
