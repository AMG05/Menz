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
import InputTextField from '@templates/components/forms/InputTextField';

// export const title = 'Home'; 

const Home = () =>
      <Fragment>
       
    <Header />



    {/* <div class="page__container">
    <LoginAdmin
        title="Welcome back Admins">
        Please enter your details
    </LoginAdmin>
   </div> */}

    <div class="bg__grey">
        <div class="bg__network">
            <div class="wrap">
                <div class="container">
                    <div class="container__inner row">
                        <div class="col xs-12 md-6">
                            <form class="form">
                                <header class="page-header--alt">
                                    <h1 class="page-header__heading visuallyhidden">Sign in</h1>
                                    <p class="page-header__title">Welcome back</p>
                                    <p class="page-header__subtitle">Please enter your details</p>
                                </header>
                                <div class="form__row push-top--xlg">
                                    <div class="text-field">
                                        <label class="label">Customer Reference number</label>
                                        <div class="text-field__input-container">
                                            <input class="text-field__input"></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="form__row">
                                    <div class="text-field">
                                        <label class="label">Password</label>
                                        <div class="text-field__input-container">
                                            <input class ="text-field__input" id="Current password" type="password" aria-required="true"></input>
                                            <button class="text-field__toggleBtn Btn btn--input" aria-controls="CurrentPassword" type="button">Show</button>
                                            <span class="visuallyhidden" aria-live="polite">Your password is hidden</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form__row">
                                    <button class="btn btn--primary push-top--xs push-bottom" type="submit" id="">Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <AdminFooter></AdminFooter>
   
    
</Fragment>;

export default Home;


