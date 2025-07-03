import { Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Page({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <form className="flex flex-col gap-4" onSubmit={submit}>
                {status && (
                    <Alert variant="success">
                        <AlertDescription>{status}</AlertDescription>
                    </Alert>
                )}

                <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        type="email"
                        autoFocus
                        tabIndex={1}
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="email@example.com"
                        error={errors.email}
                    />
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        tabIndex={2}
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Password"
                        error={errors.password}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onClick={() => setData('remember', !data.remember)}
                            tabIndex={3}
                        />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>

                    {canResetPassword && (
                        <Link href={route('password.request')} tabIndex={5} className="link text-sm">
                            Forgot password?
                        </Link>
                    )}
                </div>

                <div>
                    <Button type="submit" className="w-full" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="size-4 animate-spin" />}
                        Log in
                    </Button>
                </div>
            </form>

            <div className="text-center font-bold text-muted-foreground">
                Don't have an account?{' '}
                <Link href={route('register')} tabIndex={5} className="link">
                    Sign up
                </Link>
            </div>
        </AuthLayout>
    );
}
