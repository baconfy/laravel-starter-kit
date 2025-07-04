import { Brand } from '@/components/ui/brand';
import WebLayout from '@/layouts/web-layout';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Fingerprint, LayoutDashboard, UserPen } from 'lucide-react';

export default function Page() {
    const { auth } = usePage<SharedData>().props;

    return (
        <WebLayout title="Welcome to Banconfy" description="Life's Better with Baconfy." tags="welcome, baconfy">
            <div className="text-center">
                <div className="relative space-y-2 md:scale-150">
                    <p className="absolute top-2 left-22 tracking-tight italic md:top-4 md:left-36">The missing ingredient? It's</p>
                    <Brand className="text-8xl xl:text-9xl" />
                </div>
            </div>

            <nav className="mt-12 flex items-center justify-center gap-8 md:mt-28">
                {auth.user ? (
                    <Link href={route('app.dashboard')} className="link text-lg">
                        <LayoutDashboard className="size-6" /> Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={route('login')} className="link text-lg">
                            <Fingerprint className="size-6" /> Login
                        </Link>
                        <Link href={route('register')} className="link text-lg">
                            <UserPen className="size-6" /> Register
                        </Link>
                    </>
                )}
            </nav>
        </WebLayout>
    );
}
