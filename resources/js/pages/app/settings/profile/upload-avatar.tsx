import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SharedData } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { User } from 'lucide-react';
import { FormEventHandler } from 'react';

const UploadAvatar = () => {
    const { auth } = usePage<SharedData>().props;
    const { data, setData, processing, patch, clearErrors, errors, recentlySuccessful } = useForm<{ name: string; email: string }>(auth.user);

    const update: FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();

        patch(route('app.settings'), { preserveScroll: true });
    };

    return (
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12">
            <div className="hidden md:col-span-4 md:block md:content-center">
                <p className="font-bold">Your Photo</p>
                <p className="text-muted-foreground">This will be displayed on your profile.</p>
            </div>

            <div className="col-span-12 content-center md:col-span-8">
                <div className="flex flex-col items-center justify-center gap-4 md:w-fit md:flex-row">
                    <Avatar className="size-24">
                        <AvatarImage src={auth.user.avatar} />
                        <AvatarFallback>
                            <User className="size-12" />
                        </AvatarFallback>
                    </Avatar>

                    <div className="space-x-2 text-center">
                        <Button size="xs" variant="outline" className="w-fit">
                            Upload
                        </Button>
                        <Button variant="destructive" size="xs" className="w-fit" asChild>
                            <Link href={'/'}>Delete</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadAvatar;

// <div className="h-full flex flex-col space-y-6">
//     <div className="hidden md:block">
//         <Heading title="Upload avatar" description="Change your profile picture." />
//     </div>
//
//     <div className="grow flex items-center justify-center">
//         <div className="relative size-48">
//             <Avatar className="size-48">
//                 <AvatarImage src={auth.user.avatar} />
//                 <AvatarFallback>
//                     <User className="size-24" />
//                 </AvatarFallback>
//             </Avatar>
//
//             <div className="absolute clickable bottom-2 right-2 flex items-center justify-center size-12 bg-foreground text-background rounded-full cursor-pointer">
//                 <RefreshCw />
//             </div>
//         </div>
//     </div>
//
//     <Transition
//         show={recentlySuccessful}
//         enter="transition ease-in-out"
//         enterFrom="opacity-0"
//         leave="transition ease-in-out"
//         leaveTo="opacity-0"
//     >
//         <p className="flex items-center justify-center gap-1 font-bold text-success">
//             <ThumbsUp className="size-6" />
//             Saved!
//         </p>
//     </Transition>
// </div>
