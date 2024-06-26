import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import PageTitle from '@templates/components/pagetitle';
import Checkbox from '@templates/components/forms/checkbox';
import InputTextField from '@templates/components/forms/InputTextField';


const Account = () => <DefaultLayout>
    
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

    <div class="banner">
    <PageTitle title={'My account'} />
    </div>


    <div class="tabs js-tabs">
        <div class="wrap">
            <div class="row">
                <div class="col xs-12 md-6">
                    <div class="tabs__tabslist" role="tablist">
                        <a id="tab-1" class="tabs__tab js-tabs__link" href="#settings" role="tab">Settings</a>
                        <a id="tab-2" class="tabs__tab js-tabs__link" href="#password" role="tab">Password</a>
                        <a id="tab-3" class="tabs__tab js-tabs__link" href="#emailnotifications" role="tab">Email - notifications</a>
                        <a id="tab-3" class="tabs__tab js-tabs__link" href="#gopaperless" role="tab">Go Paperless</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="tab__container my-account__container">
            <div class="wrap">
                <div class="row">
                    <div class="col xs-12 md-6">
                        <div id="settings" class="tabs__tabpanel" role="tabpanel">
                           <div class="">
                                <form action="" method="post" class="form form-accounts js-validate">
                                    <fieldset>
                                        <legend class="form-legend">
                                            <h1 class="form__title">Account settings</h1>
                                            <p class="form__content">Please regularly check you account setting and make sure that they are kept up to date.</p>
                                        </legend>
                                        <div class="form__row">
                                            <InputTextField
                                                inputName={'firstname'}
                                                ariaLabel={'Type in first name'}
                                                label={'First name'}
                                                />
                                        </div>
                                        <div class="form__row">
                                            <div class="text-field">
                                                <label class="label" for="firstname">First name</label>
                                                <span class="error-message" data-valmsg-for="firstname" />
                                            </div>
                                            <div class="text-field__input-container">
			                                    <input data-val="true" data-val-required="First name must not be empty" autocomplete="given-name" class="text-field__input" id="firstname" name="firstname"
    aria-required="true" />
                                             </div>
                                        </div>
                                        <div class="form__row">
                                            <div class="text-field">
                                                <label class="label" for="lastname">
                                                    Last name
                                                </label>
                                                <span class="error-message" data-valmsg-for="lastname" />
                                            </div>
                                            <div class="text-field__input-container">
                                                <input data-val="true" data-val-required="Last name must not be empty" autocomplete="family name" class="text-field__input" id="lastname" name="lastname"
                                                    aria-required="true" />
                                            </div>
                                        </div>
                                        <div class="form__row">
                                            <div class="text-field">
                                                <label class="label" for="brand">
                                                    Menzies Distribution Brand
                                                </label>
                                                <span class="error-message" data-valmsg-for="brand" />
                                            </div>
                                            <div class="text-field__input-container">
                                                <input class="text-field__input" id="brand" name="brand" type="text" disabled />
                                            </div>
                                        </div>
                                        <div class="form__row">
                                            <div class="text-field">
                                                <label class="label" for="reference">
                                                    Customer Reference Number
                                                </label>
                                                <span class="error-message" data-valmsg-for="reference" />
                                            </div>
                                            <div class="text-field__input-container">
                                                <input class="text-field__input" id="reference" name="reference" type="number" disabled />
                                            </div>
                                        </div>
                                        <div class="form__row">
                                            <div class="text-field">
                                                <label class="label" for="user">
                                                    User Name
                                                </label>
                                                <span class="error-message" data-valmsg-for="user" />
                                            </div>
                                            <div class="text-field__input-container">
                                                <input class="text-field__input" id="user" name="user" type="text" />
                                            </div>
                                        </div>
                                        <div class="form__row">
                                            <div class="text-field">
                                                <label class="label" for="email">
                                                    Email address
                                                </label>
                                                <span class="error-message" data-valmsg-for="email" />
                                            </div>
                                            <div class="text-field__input-container">
                                                <input data-val="true" data-val-required="Email must not be empty" data-val-email="Email must be correct format" class="text-field__input" id="email" name="email"
                                                    type="email" autocomplete="email" />
                                            </div>
                                        </div>
                                        <div class="btn__container">
                                            <button type="submit" class="modal-confirmation__confirm btn btn--primary">Save</button>
                                            <button type="submit" class="modal-confirmation__cancel btn--secondary">Cancel</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            <div class="tab__container my-account__container">
                <div class="wrap">
                    <div class="row">
                        <div class="col xs-12 md-6">
                            <div id="password" class="tabs__tabpanel" role="tabpanel" hidden>
                            <div class="">
                                <form action="#" method="post" class="form form-accounts form js-validate">
                                    <fieldset>
                                        <legend class="form-legend">
                                            <h1 class="form__title">Update Password</h1>
                                            <p class="form__content">Please enter your current password to change your password. You new password must be more than 8 characters long.</p>
                                        </legend>
                                        <div class="form__row">
                                            <InputTextField
                                                inputName={'password'}
                                                ariaLabel={'Type in first name'}
                                                label={'Current password'}
                                                />
                                        </div>
                                        <div class="form__row">
                                            <InputTextField
                                                inputName={'newpassword'}
                                                ariaLabel={'Type in new password'}
                                                label={'New password'}
                                                />
                                        </div>
                                        <div class="form__row">
                                            <InputTextField
                                                inputName={'confirmnewpassword'}
                                                ariaLabel={'Type in new password again'}
                                                label={'Confirm new password'}
                                                />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="password">
                                                Current password
                                            </label>
                                            <span class="error-message" id="undefined-error-message" data-valmsg-for="password" />
                                            <input data-val="true" data-val-required="The current password does not match what we have on record" class="form-input" id="password" name="password" type="password"
                                                aria-required="true" />
	        
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="newpassword">
                                                New password
                                            </label>
                                            <span class="error-message" id="undefined-error-message" data-valmsg-for="newpassword" />
                                            <input data-val="true" data-val-required="Password must be new" class="form-input" id="newpassword" name="newpassword" type="password"
                                                aria-required="true" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="confirmpassword">
                                                Confirm new password
                                            </label>
                                            <span class="error-message" id="undefined-error-message" data-valmsg-for="newpassword" />
                                            <input data-val="true" data-val-required="Password must the same" class="form-input" id="confirmpassword" name="confirmpassword" type="password"
                                                aria-required="true" />
                                        </div>
                                        <div class="btn__container">
                                            <button type="submit" class="modal-confirmation__confirm">Update password</button>
                                            <button type="submit" class="modal-confirmation__cancel js-modal-confirmation__btn">Cancel</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab__container my-account__container">
                <div class="wrap">
                    <div class="row">
                        <div class="col xs-12 md-6">
                            <div id="emailnotifications" class="tabs__tabpanel" role="tabpanel" hidden>
                            <div class="">
                                <form action="#" method="post" class="form form-accounts js-validate">
                                    {/* <Checkbox   legend={'Manage email preferences'}
                                                    sublabel={'Choose when you and how we contact you'}
                                                    label={'Receive communication from menzies'}/> */}
                                                
                                    <fieldset>
                                        <legend class="form-legend">
                                            <h1 class="form__title">Manage email preferences</h1>
                                        </legend>
                                        <div class="push-bottom--half form__content">Choose when and how we contact you</div>
		                                <span class="error-message push-bottom--half" data-valmsg-for="opts" />
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="communications" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="communications">
                                                Receive communication from menzies
                                                <span class="form-checkboxes__subLabel">Receive email updates about Menzies</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="news" name="news" type="checkbox" value="carcasses" />
                                                <label class="form-label form-checkboxes__label" for="news">
                                                News and Updates
                                                <span class="form-checkboxes__subLabel">Receive email updates to news and promotions</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="notifications" name="notifications" type="checkbox" value="carcasses" />
                                                <label class="form-label form-checkboxes__label" for="notifications">
                                                Notifications
                                                <span class="form-checkboxes__subLabel">Stay informed about your account with email notifications including updates on your orders and deliveries</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="emails" name="emails" type="checkbox" value="carcasses" />
                                                <label class="form-label form-checkboxes__label" for="emails">
                                                Third-party emails
                                                <span class="form-checkboxes__subLabel">Sign up to receive emails from our trusted thirs-party partners and stay up to date with the latest offers, deals and promotions</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="btn__container">
                                            <button type="submit" class="modal-confirmation__confirm">Save email preferences</button>
                                            <button type="submit" class="modal-confirmation__cancel js-modal-confirmation__btn">Cancel</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                               
                            </div>
                        </div>
                    </div>
                 </div>
           
            <div class="tab__container my-account__container">
                <div class="wrap">
                    <div class="row">
                        <div class="col xs-12 md-6">
                            <div id="gopaperless" class="tabs__tabpanel" role="tabpanel" hidden>
                            <div class="">
                                <form action="" method="post" class="form form-accounts">
                                    <fieldset>
                                        <legend class="form-legend">
                                            <h1 class="form__title">Manage printed communication preferences</h1>
                                            <p class="form__content">Please un-check any documents you no longer wish to receive with your daily delivery. You will still be able to view all documents on the website under Document Archive.</p>
                                        </legend>
                                        <span class="error-message push-bottom--half" data-valmsg-for="opts" />
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item form__row--checkbox">
                                                <input class="form-checkboxes__input" id="credit" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="credit">
                                                Credit advice note
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="delivery" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="delivery">
                                                Delivery note
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Final delivery note
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="weeklyinvoice" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="weeklyinvoice">
                                                Weekly invoice
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="recallnote" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="recallnote">
                                                Recall note (Magazines)
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="voucher" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="voucher">
                                                Voucher recall note
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="remittance" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="remittance">
                                                Remittance advice
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="promotion" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="promotion">
                                                Retail promotion and allocation advice
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="statement" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="statement">
                                                Statement
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="tote" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="tote">
                                                Tote box chargers
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="reminder" name="opts" type="checkbox" data-val="true"  data-val-required="Select at least one option" />
                                                <label class="form-label form-checkboxes__label" for="reminder">
                                                Tote box reminder letter
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div class="btn__container">
                                            <button type="submit" class="modal-confirmation__confirm">Save my preferences</button>
                                            <button type="submit" class="modal-confirmation__cancel js-modal-confirmation__btn">Cancel</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
</div>
</div>
</div>
   

    </DefaultLayout>;

export default Account;