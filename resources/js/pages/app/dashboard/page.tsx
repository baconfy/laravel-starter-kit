import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';

export default function Page() {
    return (
        <AppLayout>
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
