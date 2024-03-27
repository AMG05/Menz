import { h, Fragment } from 'preact';
import Header from '@components/admin/header';
import Footer from '@components/admin/footer';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import DefaultLayout from '@layouts/default';


const AdminNews = () => <Fragment>



<DefaultLayout>

<div class="bg__grey">
    <div class="bg__network">
        <div class="container">
            <div class="wrap">
            <header class="page-header--alt push-bottom--xxlg">
                <h1 class="page-header__heading">Customers</h1>
                <p class="page-header__title">Powerful Delivery and Order Management Software tailored to the needs of modern newstrade.</p>
                <p class="page-header__subtitle"></p>
            </header>
            <nav class="signpost__container" aria-label="Customer navigation">
                <ul class="signpost__list">
                    <a class="signpost__link" href="#">
                        <li class="signpost__item">
                            <h2 class="signpost__heading">New Customers</h2>
                            <p class="signpost__description">Register and learn more about i-Menzies and how it can work for you.</p>
                        </li>
                    </a>
                    <a class="signpost__link" href="#">
                        <li class="signpost__item">
                            <h2 class="signpost__heading">Existing Customers</h2>
                            <p class="signpost__description">Log in and access your dashboard to manage your account.</p>
                        </li>
                    </a>
                        <a class="signpost__link" href="#">
                            <li class="signpost__item">
                                <h2 class="signpost__heading">New Customers</h2>
                                <p class="signpost__description">Register and learn more about i-Menzies and how it can work for you.</p>
                            </li>
                        </a>
                        <a class="signpost__link" href="#">
                            <li class="signpost__item">
                                <h2 class="signpost__heading">Existing Customers</h2>
                                <p class="signpost__description">Log in and access your dashboard to manage your account.</p>
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

</DefaultLayout>



</Fragment>;


export default AdminNews;