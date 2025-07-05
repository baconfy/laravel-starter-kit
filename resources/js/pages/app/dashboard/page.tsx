import { Heading } from '@/components/app/heading';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Page() {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout title="Dashboard">
            <Heading title={`Welcome, ${auth.user.name}`} description="Welcome to your dashboard. Here you can manage your account and settings." />

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
