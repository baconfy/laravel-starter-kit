import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type PropsWithChildren } from 'react';

export default function AppLayout({ children, ...props }: PropsWithChildren) {
    return <AppLayoutTemplate {...props}>{children}</AppLayoutTemplate>;
}
