import { Heading } from '@/components/app/heading';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const RemoveAccount = () => {
    const { delete: destroy, setData, errors, clearErrors, processing } = useForm<{ password: string }>();

    const remove: FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();

        destroy(route('app.settings'));
    };

    return (
        <div className="space-y-6">
            <Heading title="Delete account" description="Delete your account and all of its resources." />

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="destructive" className="w-full">
                        Remove Account
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            Please proceed with caution, this cannot be undone. This will permanently delete your account and remove your data from
                            our servers.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={remove} className="space-y-4">
                        <div>
                            <Label>Confirm your password</Label>
                            <Input
                                type="password"
                                name="password"
                                autoFocus={true}
                                error={errors.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                        </div>

                        <Button variant="destructive">
                            {processing && <LoaderCircle className="size-4 animate-spin" />}
                            Permanently remove my account
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default RemoveAccount;
