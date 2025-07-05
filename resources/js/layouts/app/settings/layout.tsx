import { KeyRound, Settings2, User } from 'lucide-react';
import React from 'react';

import { HeadingLarge } from '@/components/app/heading';
import { TabLink, TabLinks } from '@/components/ui/tab-links';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';

const SettingsLayout = ({ children, ...props }: React.ComponentProps<'div'>) => {
    return (
        <AppLayout title="Settings">
            <HeadingLarge title="Settings" description="Manage your account settings." />

            <TabLinks>
                <TabLink href={route('app.settings')} active={route().current('app.settings')} icon={User}>
                    Profile
                </TabLink>
                <TabLink href={route('app.settings.security')} active={route().current('app.settings.security')} icon={KeyRound}>
                    Security
                </TabLink>
                <TabLink href={route('app.settings.preferences')} active={route().current('app.settings.preferences')} icon={Settings2}>
                    Preferences
                </TabLink>
            </TabLinks>

            <div className={cn(props.className)}>{children}</div>
        </AppLayout>
    );
};

export default SettingsLayout;
