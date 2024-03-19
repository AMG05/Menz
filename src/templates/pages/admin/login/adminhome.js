import { h, Fragment } from 'preact';
import DefaultLayout from '@layouts/default';
import Header from '@templates/components/admin/header';
import Logo from '@templates/components/logo';
import Main from '@templates/components/main';
import LoginAdmin from '@templates/components/admin/login/login';
import ShowPasswordInput from '@templates/components/forms/showpasswordinput';
import Input from '@templates/components/forms/textfieldinput';
import PrimaryButton from '@templates/components/forms/primarybutton';
import Footer from '@templates/components/footer';
import AdminFooter from '@templates/components/admin/footer';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import Cards from '@components/cards';

// export const title = 'Home'; 

const Home = () =>
      <Fragment>
       
    <Header />
    <SecondaryNavigation
        pages={[
        { title: 'Home', link: '/' },
        { title: 'Users', link: '/admin/login/adminuser', active: true  },
        { title: 'Groups',link: '/admin/login/admingroup' },
        { title: 'News', link: '/admin/login/adminnews' },
        { title: 'Manage Content', link: '/managecontent' },
        ]}
    />

<Cards />

<div class="admin-hero__container">
    <div class="wrap">
        <div class="row">
            <div class="col xs-12 md-4">
                <h2 class="tasks-title">Top tasks:</h2>
                    <nav>
                        <ul>
                            <li class="task__card">
                                <a href="/adminuser" class="task__link">
                                    <h2 class="task-item-title">Impersonate User</h2>
                                    {/* <svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: flex; user-select: none; vertical-align: text-right; overflow: visible;">
                                        <path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg> */}
                                </a>
                                <p class="task-item-description">For customer support you can easily impersonate users. Just search for a customers using their customer user number, select their number and click 'impersonate'</p> 
                            </li>
                            <li class="task__card">
                                <a href="/adminuser" class="task__link">
                                    <h2 class="task-item-title">+ Create new user</h2>
                            </a>
                                <p class="task-item-description">You can add new users and export new users list to CSV for easy management</p> 
                            </li>
                            <li class="task__card">
                                <a href="/admingroup" class="task__link">
                                    <h2 class="task-item-title">+ Create new group</h2>
                            </a>
                                <p class="task-item-description">You can create a new group and assign this group to new users or branch.</p> 
                            </li>
                            <li class="task__card">
                                <a href="/adminnews" class="task__link">
                                    <h2 class="task-item-title">+ Create new news article</h2>
                            </a>
                                <p class="task-item-description">Add a new news article to let users know of new sales or promotions.</p> 
                            </li>
                        </ul>
                    </nav>
                </div>
            <div class="col xs-12 md-8">
                <div class="titles">
                    <h2 class="tasks-title">Top pages:</h2>
                </div>
                    <nav>
                        <ul class="task-item-list">
                            <li class="task-item">1. Where is my van</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">2. Deliveries</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">3. News Article: How to set up an account</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">4. How to delete my account</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">5. Contact Us</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">6. Credits</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">7. Returns</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">8. Order Management</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">9. Invoices</li>
                        </ul>
                        <ul class="task-item-list">
                            <li class="task-item">10. Accounts</li>
                        </ul>
                    </nav>

            </div>
        </div>
    </div>
</div>
  
   <AdminFooter />
   
    
</Fragment>;

export default Home;


