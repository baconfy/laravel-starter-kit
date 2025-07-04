import { Heading } from '@/components/app/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '@/pages/app/settings/layout';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useRef } from 'react';

export default function Page() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    const { setData, processing, put, reset, errors, recentlySuccessful } = useForm<{
        password: string;
        current_password: string;
        password_confirmation: string;
    }>();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('app.settings.password'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <Heading title="Update password" description="Ensure your account is using a long, random password to stay secure" />

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-muted-foreground">Saved</p>
                    </Transition>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <Label>Current password</Label>
                        <Input
                            type="password"
                            autoFocus={true}
                            ref={currentPasswordInput}
                            placeholder="Current password"
                            autoComplete="current-password"
                            error={errors.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                        />
                    </div>

                    <div>
                        <Label>New password</Label>
                        <Input
                            type="password"
                            ref={passwordInput}
                            error={errors.password}
                            placeholder="New password"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </div>

                    <div className="pb-2">
                        <Label>Confirm password</Label>
                        <Input
                            type="password"
                            ref={passwordInput}
                            autoComplete="new-password"
                            placeholder="Confirm password"
                            error={errors.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                    </div>

                    <Button className="px-8" disabled={processing}>
                        {processing && <LoaderCircle className="size-4 animate-spin" />}
                        {processing ? 'Updating...' : 'Update password'}
                    </Button>
                </form>
            </div>
        </Layout>
    );
}
