import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { useInitials } from '@/hooks/use-initials';
import AppLayout from '@/layouts/app-layout';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Page() {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    return (
        <AppLayout title="Dashboard">
            <div className="flex items-center gap-4">
                <Avatar className="size-24">
                    <AvatarImage src={auth.user.avatar} />
                    <AvatarFallback className="text-3xl font-bold">{getInitials(auth.user.name)}</AvatarFallback>
                </Avatar>

                <div className="-space-y-1 leading-tight">
                    <p className="text-xl font-bold">Welcome,</p>
                    <h1 className="font-title text-3xl font-bold">{auth.user.name}</h1>
                </div>
            </div>

            <div className="flex-1">
                <div className="grid min-h-full gap-4 max-xl:grid-cols-1 md:grid-flow-col md:grid-rows-3 md:gap-8">
                    <PlaceholderPattern className="max-xl:col-span-1 md:row-span-1" />
                    <PlaceholderPattern className="max-xl:col-span-1 md:row-span-1" />
                    <PlaceholderPattern className="max-xl:col-span-1 md:col-span-3" />
                    <PlaceholderPattern className="max-xl:col-span-1 md:col-span-2" />
                    <PlaceholderPattern className="max-xl:col-span-1 md:row-span-1" />
                    <PlaceholderPattern className="max-xl:col-span-1 md:row-span-1" />
                    <PlaceholderPattern className="max-xl:col-span-1 md:col-span-1 md:row-span-3" />
                </div>
            </div>
        </AppLayout>
    );
}
