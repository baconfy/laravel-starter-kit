import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Brand, BrandIcon } from '@/components/ui/brand';
import { cn } from '@/lib/utils';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { AlignRight, Home, LayoutDashboard, Settings, User, X } from 'lucide-react';
import React from 'react';

const navigation = [
    {
        title: 'Menu',
        items: [
            { label: 'Dashboard', route: 'app.dashboard', icon: LayoutDashboard },
            { label: 'Settings', route: 'app.settings', icon: Settings },
        ],
    },
    {
        title: 'Return to',
        items: [{ label: 'Home', route: 'welcome', icon: Home }],
    },
];

export default function AppSidebarLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex max-h-screen min-h-screen gap-0">
            <Sidebar />

            <div className="flex grow flex-col gap-4 overflow-y-auto p-5 md:gap-12 md:p-16">
                <header className="flex items-center justify-between md:hidden">
                    <Link href={route('app.dashboard')} aria-label="Back to dashboard">
                        <BrandIcon />
                    </Link>

                    <label htmlFor="toggle-sidebar">
                        <AlignRight className="size-10" />
                    </label>
                </header>

                <main className="flex grow flex-col gap-6 max-lg:mt-8 md:gap-8">{children}</main>
            </div>
        </div>
    );
}

const Sidebar = () => {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <input type="checkbox" id="toggle-sidebar" className="peer hidden" />
            <label
                htmlFor="toggle-sidebar"
                className="absolute inset-0 z-[10] hidden backdrop-blur backdrop-brightness-80 transition-all duration-75 peer-checked:flex md:hidden"
            ></label>

            <aside
                className={cn(
                    'peer-checked:translate-x-0 peer-checked:delay-0 peer-checked:ease-in-out peer-checked:animate-in',
                    'absolute inset-0 z-[20] flex w-[90vw] flex-col items-start justify-between border-r border-primary/10 bg-accent px-8 py-12 shadow',
                    'max-lg:-translate-x-full max-lg:transform max-lg:transition-all max-lg:duration-200',
                    'md:relative md:w-[20vw] md:translate-x-0 md:border-none md:shadow-none',
                )}
            >
                <label htmlFor="toggle-sidebar" className="absolute top-4 right-4 md:hidden">
                    <X className="size-10 stroke-3" />
                </label>

                <header className="flex w-full items-center justify-between gap-4">
                    <Brand className="text-5xl" />
                </header>

                <main className="w-full space-y-12">
                    {navigation.map((group) => {
                        return (
                            <div key={JSON.stringify(group)} className="space-y-2">
                                <h3 className="text-xs font-bold text-muted-foreground/50 uppercase">{group.title}</h3>

                                <div className="flex w-full flex-col gap-1">
                                    {group.items.map((item) => {
                                        return (
                                            <Link
                                                href={route(item.route)}
                                                key={JSON.stringify(item)}
                                                aria-current={route().current(item.route) ? 'page' : 'false'}
                                                className={cn('group flex items-center gap-2 rounded-lg font-bold tracking-tight uppercase', {
                                                    'clickable text-foreground hover:bg-foreground/10': !route().current(item.route),
                                                    'cursor-default bg-primary text-primary-foreground':
                                                        route().current(item.route) || route().current(`${item.route}.*`),
                                                })}
                                            >
                                                <div className="flex items-center justify-start gap-2 px-6 py-4">
                                                    {item.icon && <item.icon className="size-6" />}
                                                    {item.label && (
                                                        <span className="transform leading-none text-nowrap transition-all duration-300 group-hover:translate-x-2">
                                                            {item.label}
                                                        </span>
                                                    )}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </main>

                <footer className="flex w-full flex-col items-center justify-center gap-2">
                    <Avatar className="size-16">
                        <AvatarImage src={auth.user.avatar} />
                        <AvatarFallback className="text-2xl font-bold">
                            <User className="size-8" />
                        </AvatarFallback>
                    </Avatar>

                    <h1 className="line-clamp-1 font-title text-2xl font-bold">{auth.user.name}</h1>
                </footer>
            </aside>
        </>
    );
};
