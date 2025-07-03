import { Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function Page({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout title="Forgot password" description="Enter your email to receive a password reset link">
            {status && (
                <Alert variant="success">
                    <AlertDescription>{status}</AlertDescription>
                </Alert>
            )}

            <div className="space-y-6">
                <form className="flex flex-col gap-4" onSubmit={submit}>
                    <div>
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="off"
                            value={data.email}
                            autoFocus
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                            error={errors.email}
                        />
                    </div>

                    <div>
                        <Button className="w-full" disabled={processing}>
                            {processing && <LoaderCircle className="size-4 animate-spin" />}
                            Email password reset link
                        </Button>
                    </div>
                </form>

                <div className="text-center font-bold text-muted-foreground">
                    <span>Or, return to</span>{' '}
                    <Link href={route('login')} className="link">
                        log in
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
