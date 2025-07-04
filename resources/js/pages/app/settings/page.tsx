import AppLayout from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';

export default function Page() {
    return (
        <AppLayout title="Settings">
            <div className="flex items-center gap-4">
                <h1 className="font-title text-5xl font-bold tracking-tight">Settings</h1>
            </div>

            <div>
                <Link href={route('app.settings')}>Profile</Link>
            </div>
        </AppLayout>
    );
}
