import SettingsLayout from '@/layouts/app/settings/layout';
import ChangeAppearance from '@/pages/app/settings/preferences/change-appearance';

export default function Page() {
    return (
        <SettingsLayout className="flex flex-col gap-8 px-4 md:px-12">
            <ChangeAppearance />
        </SettingsLayout>
    );
}
