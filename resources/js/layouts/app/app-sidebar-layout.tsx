import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({ children, ...props }: PropsWithChildren) {
    return <div {...props}>{children}</div>;
}
