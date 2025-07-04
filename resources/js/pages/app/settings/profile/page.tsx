import Layout from '@/pages/app/settings/layout';
import ProfileInformation from '@/pages/app/settings/profile/profile-information';
import RemoveAccount from '@/pages/app/settings/profile/remove-account';

export default function Page() {
    return (
        <Layout className="px-4 md:px-0">
            <ProfileInformation />
            <RemoveAccount />
        </Layout>
    );
}
