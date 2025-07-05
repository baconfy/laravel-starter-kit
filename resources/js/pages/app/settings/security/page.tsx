import SettingsLayout from '@/layouts/app/settings/layout';
import ChangePassword from '@/pages/app/settings/security/change-password';

export default function Page() {
    return (
        <SettingsLayout className="flex flex-col gap-8 px-4 md:px-12">
            <ChangePassword />
        </SettingsLayout>
    );
}
