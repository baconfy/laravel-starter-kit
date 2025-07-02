import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({ children, title, description, ...props }: PropsWithChildren<{ title?: string; description?: string }>) {
    return (
        <div {...props}>
            <h1>{title}</h1>
            <small>{description}</small>
            <div>{children}</div>
        </div>
    );
}
