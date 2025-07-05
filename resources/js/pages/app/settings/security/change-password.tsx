import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { ThumbsUp } from 'lucide-react';
import { FormEventHandler, useRef } from 'react';

const ChangePassword = () => {
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
        <div className="grid gap-2 md:grid-cols-12 md:gap-6">
            <div className="col-span-5 content-center">
                <p className="font-bold">Update password</p>
                <p className="hidden text-muted-foreground md:block">Ensure your account is using a long, random password to stay secure.</p>
            </div>

            <div className="col-span-7 content-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Change Password</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Change your password</DialogTitle>
                            <DialogDescription>Ensure your account is using a long, random password to stay secure.</DialogDescription>
                        </DialogHeader>

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

                            <div>
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

                            <div>
                                <Button processing={processing}>Update password</Button>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="flex gap-1 font-bold text-success-foreground">
                                        <ThumbsUp className="size-6" />
                                        Saved!
                                    </p>
                                </Transition>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default ChangePassword;
