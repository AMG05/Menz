import { h, Fragment } from 'preact';
import Header from '@components/admin/header';
import Footer from '@components/admin/footer';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';


const AdminGroup = () => <Fragment>

<Header />

<SecondaryNavigation
    pages={[
        { title: 'Home', link: '/' },
        { title: 'Users', link: '/admin/login/adminuser', active: true },
        { title: 'Groups', link: '/admin/login/admingroup' },
        { title: 'News', link: '/news' },
        { title: 'Manage Content', link: '/managecontent' },
        ]}
    />


<PageTitle
    title="Groups">
    Simplify the management of user groups and effortlessly create new ones. Tailor groups to specific titles, routes, and branches with ease, ensuring precise control and organization.
    </PageTitle>


<Footer />

</Fragment>;


export default AdminGroup;