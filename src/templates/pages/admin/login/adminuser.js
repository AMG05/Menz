import { h, Fragment } from 'preact';
import Header from '@components/admin/header';
import Footer from '@components/admin/footer';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import SearchandFilter from '@templates/components/SearchandFilter';


const AdminUser = () => <Fragment>

<Header />

<SecondaryNavigation
    pages={[
        { title: 'Home', link: '/' },
        { title: 'Users', link: '/admin/login/adminuser', active: true },
        { title: 'Groups', link: '/admin/login/admingroup' },
        { title: 'News', link: '/admin/login/adminnews' },
        { title: 'Manage Content', link: '/managecontent' },
        ]}
    />

<div class="banner">
<PageTitle
    title="Users">
    Here, you can manage user profiles, including editing, locking, or deleting accounts. You can also add new users and export user lists to CSV for easy management.”
    </PageTitle>
</div>
<div class="tabs js-tabs">
        <div class="wrap">
            <div class="row">
                <div class="tabs__tabslist" role="tablist">
                        <a
                            id="tab-0"
                            class="tabs__tab js-tabs__link"
                            href="#panel-0"
                            role="tab">
                        Group
                        </a>
                        <a
                            id="tab-1"
                            class="tabs__tab js-tabs__link"
                            href="#panel-1"
                            role="tab">
                        Create new group
                        </a>
                        
                </div>
            </div>
        </div>
        <div class="data__container">
            <div class="wrap">
                    <div class="row">
                        <div class=" col xs-12">
                            <section id="panel-0" class="tabs__section rte" role="tabpanel" hidden>
                                <p></p>
                                <p></p>
                            </section>
                            <section id="panel-1" class="tabs__section rte" role="tabpanel">
                                <p></p>
                                <p></p>
                            </section>
                        </div>
                    </div>
            </div>
        </div>  
       
</div>
  
{/* <div class="data__container">
    <div class="wrap">
        <div class="row">
        <div class="col xs-12 md-12">
                <SearchandFilter />
                </div>
        </div>
    </div>
</div> */}
  


<Footer />

</Fragment>;


export default AdminUser;