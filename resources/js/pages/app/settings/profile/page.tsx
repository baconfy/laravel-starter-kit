import { Divider } from '@/components/ui/divider';
import SettingsLayout from '@/layouts/app/settings/layout';
import ProfileInformation from '@/pages/app/settings/profile/profile-information';
import RemoveAccount from '@/pages/app/settings/profile/remove-account';
import UploadAvatar from '@/pages/app/settings/profile/upload-avatar';

export default function Page() {
    return (
        <SettingsLayout className="flex flex-col gap-8 px-2 md:px-12">
            <UploadAvatar />
            <Divider />
            <ProfileInformation />
            <Divider />
            <RemoveAccount />
        </SettingsLayout>
    );
}
