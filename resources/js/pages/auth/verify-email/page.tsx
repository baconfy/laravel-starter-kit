import { Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';

export default function Page({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <AuthLayout title="Verify email" description="Please verify your email address by clicking on the link we just emailed to you.">
            <form className="flex flex-col gap-4" onSubmit={submit}>
                {status === 'verification-link-sent' && (
                    <Alert variant="success">
                        <AlertDescription>
                            A new verification link has been sent to the email address you provided during registration.
                        </AlertDescription>
                    </Alert>
                )}

                <Button disabled={processing} variant="outline">
                    {processing && <LoaderCircle className="size-4 animate-spin" />}
                    Resend verification email
                </Button>

                <Link href={route('logout')} method="post" className="link text-destructive-foreground">
                    Log out
                </Link>
            </form>
        </AuthLayout>
    );
}
