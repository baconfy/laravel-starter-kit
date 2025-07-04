import { Heading } from '@/components/app/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import { LoaderCircle, ThumbsUp } from 'lucide-react';
import { FormEventHandler } from 'react';

const ProfileInformation = () => {
    const { auth } = usePage<SharedData>().props;
    const { data, setData, processing, patch, clearErrors, errors, recentlySuccessful } = useForm<{ name: string; email: string }>(auth.user);

    const update: FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();

        patch(route('app.settings'), { preserveScroll: true });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <Heading title="Profile information" description="Update your name and email address." />

                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="flex gap-1 font-bold text-success">
                        <ThumbsUp className="size-6" />
                        Saved!
                    </p>
                </Transition>
            </div>

            <form onSubmit={update} className="space-y-4">
                <div>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        autoFocus={true}
                        value={data.name}
                        error={errors.name}
                        placeholder="Full name"
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </div>

                <div className="pb-2">
                    <Label>Email address</Label>
                    <Input
                        type="email"
                        value={data.email}
                        error={errors.email}
                        placeholder="email@domain.com"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                </div>

                <Button className="px-8" disabled={processing}>
                    {processing && <LoaderCircle className="size-4 animate-spin" />}
                    {processing ? 'Updating...' : 'Update profile'}
                </Button>
            </form>
        </div>
    );
};

export default ProfileInformation;
