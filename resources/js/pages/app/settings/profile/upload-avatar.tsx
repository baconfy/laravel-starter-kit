import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SharedData } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';

const UploadAvatar = () => {
    const { auth } = usePage<SharedData>().props;
    const [fileInputKey, setFileInputKey] = useState(0);
    const { data, setData, post, processing, reset } = useForm<{ image: File | null }>({ image: null });

    useEffect(() => {
        if (data.image)
            post(route('app.settings.avatar'), {
                onFinish: () => {
                    setFileInputKey(fileInputKey + 1);
                    reset('image');
                },
            });
    }, [data, fileInputKey, post, reset]);

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

                    <form>
                        <div className="flex items-center justify-center gap-2">
                            <input
                                key={fileInputKey}
                                type="file"
                                name="avatar"
                                id="avatar"
                                className="hidden"
                                onChange={(e) => e.target.files && setData('image', e.target.files[0])}
                            />

                            <label
                                htmlFor="avatar"
                                className="flex h-8 clickable cursor-pointer items-center justify-center rounded-xs border-2 border-button px-2 text-sm font-bold"
                            >
                                {auth.user.avatar ? 'Change avatar' : 'Upload avatar'}
                            </label>

                            {auth.user.avatar && (
                                <Button variant="destructive" size="xs" className="w-fit cursor-pointer" asChild>
                                    <Link href={route('app.settings.avatar')} method="delete">
                                        Remove avatar
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadAvatar;
