import { Brand } from '@/components/ui/brand';
import WebLayout from '@/layouts/web-layout';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function Page() {
    const { auth } = usePage<SharedData>().props;

    return (
        <WebLayout title="Welcome to Banconfy" description="Life's Better with Baconfy." tags="welcome, baconfy">
            <div className="space-y-12 text-center">
                <div className="space-y-2">
                    <h1 className="font-title text-xl xl:text-3xl">Welcome to <Brand className="text-6xl xl:text-8xl" /></h1>
                    <p className="mr-14 -mt-3 italic">Life's better with Baconfy.</p>
                </div>

                <nav className="flex items-center justify-center gap-4">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="link">Dashboard</Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="link">Login</Link>
                            <Link href={route('register')} className="link">Register</Link>
                        </>
                    )}
                </nav>
            </div>
        </WebLayout>
    );
}
