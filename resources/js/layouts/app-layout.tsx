import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type PropsWithChildren } from 'react';

export default ({ children, ...props }: PropsWithChildren) => <AppLayoutTemplate {...props}>{children}</AppLayoutTemplate>;
