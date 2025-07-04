import { HeadingLarge } from '@/components/app/heading';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { KeyRound, Settings2, User } from 'lucide-react';
import React from 'react';

const Layout = ({ children, ...props }: React.ComponentProps<'div'>) => {
    const navigation = [
        { label: 'Profile', route: 'app.settings', icon: User },
        { label: 'Password', route: 'app.settings.password', icon: KeyRound },
        { label: 'Preferences', route: 'app.settings.preferences', icon: Settings2 },
    ];

    return (
        <AppLayout title="Settings">
            <HeadingLarge title="Settings" description="Manage your profile and account settings." />

            <div className="flex grow flex-col gap-4 md:flex-row md:gap-12">
                <div className="flex w-full items-center justify-around rounded bg-primary/10 p-2 md:w-72 md:flex-col md:items-start md:justify-start md:gap-6 md:p-6">
                    {navigation.map((item, index) => (
                        <Link
                            href={route(item.route)}
                            key={index}
                            className={cn('link w-full justify-center rounded p-2 md:justify-start', {
                                'bg-background': route().current(item.route),
                            })}
                        >
                            {item.icon && <item.icon className="size-6" />}
                            <span className="max-lg:hidden">{item.label}</span>
                        </Link>
                    ))}
                </div>

                <div className={cn('grow space-y-12 md:space-y-16', props.className)}>{children}</div>
            </div>
        </AppLayout>
    );
};

export default Layout;
