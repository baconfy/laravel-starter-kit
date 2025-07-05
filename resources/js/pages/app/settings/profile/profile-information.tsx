import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import { ThumbsUp } from 'lucide-react';
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
        <form onSubmit={update} className="grid gap-2 md:grid-cols-12 md:gap-8">
            <div className="col-span-4 content-center">
                <p className="font-bold">Your Name</p>
                <p className="hidden text-muted-foreground md:block">This will be displayed on your profile.</p>
            </div>

            <div className="col-span-8 content-center">
                <Input
                    type="text"
                    autoFocus={true}
                    value={data.name}
                    error={errors.name}
                    placeholder="Full name"
                    onChange={(e) => setData('name', e.target.value)}
                />
            </div>

            <div className="col-span-4 content-center">
                <p className="font-bold">Your Email</p>
                <p className="hidden text-muted-foreground md:block">This address links to your account and our messages.</p>
            </div>

            <div className="col-span-8 content-center">
                <Input
                    type="email"
                    value={data.email}
                    error={errors.email}
                    placeholder="email@domain.com"
                    onChange={(e) => setData('email', e.target.value)}
                />
            </div>

            <div className="col-span-4 content-center" />

            <div className="col-span-8 flex content-center gap-4">
                <Button className="px-8" processing={processing}>
                    Update profile
                </Button>

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
    );
};

export default ProfileInformation;
