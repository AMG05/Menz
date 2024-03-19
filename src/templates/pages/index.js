import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import VanAlert from '@templates/components/alert/vanalert';
import NewsAlert from '@templates/components/alert/newsalert';

// export const title = 'Home'; 

const Home = () => <DefaultLayout>
    <SecondaryNavigation
        pages={[
        { title: 'Home', link: '/' },
        { title: 'Deliveries', link: '/deliveries', active: true },
        { title: 'Returns', link: '/returns' },
        { title: 'Order Management', link: '/ordermanagement' },
        { title: 'Credits', link: '/credits' },
        { title: 'Invoices', link: '/invoices' },
        { title: 'Document Archive', link: '/archive' }]}
    />

    <VanAlert />

    <NewsAlert />

    </DefaultLayout>;

export default Home;