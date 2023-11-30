import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import PageTitle from '@templates/components/pagetitle';


const Account = () => <DefaultLayout>
    
    <SecondaryNavigation />

    <div class="banner">
    <PageTitle title={"My account"} />
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
                                <form action="" method="post" class="form form-accounts">
                                    <fieldset>
                                        <legend class="form-legend">
                                            <h1 class="form__title">Account settings</h1>
                                            <p class="form__content">Please regularly check you account setting and make sure that they are kept up to date.</p>
                                        </legend>
                                        
                                        <div class="form-group">
                                            <label class="form-label" for="firstname">
                                                First name
                                            </label>
                                            <span class="error-message" data-valmsg-for="fname">This must be provided</span>
			                                    <input data-val="true" data-val-required="First name must not be empty" autocomplete="given-name" class="form-input" id="firstname" name="firstname" aria-required="true" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="lastname">
                                                Last name
                                            </label>
                                            <input class="form-input" id="lastname" name="lastname" type="text"></input>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="brand">
                                                Menzies Distribution Brand
                                            </label>
                                            <input class="form-input" id="brand" name="brand" type="text" disabled></input>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="reference">
                                                Customer Reference Number
                                            </label>
                                            <input class="form-input" id="reference" name="reference" type="number" disabled></input>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="user">
                                                User Name
                                            </label>
                                            <input class="form-input" id="user" name="user" type="text"></input>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="email">
                                                Email address
                                            </label>
                                            <input class="form-input" id="email" name="email" type="email"></input>
                                        </div>
                                        <div class="form-group-btns">
                                            <button type="submit" class="modal-confirmation__confirm">Save</button>
                                            <button type="submit" class="modal-confirmation__cancel js-modal-confirmation__btn">Cancel</button>
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
                                        <div class="form-group">
                                            <label class="form-label" for="password">
                                                Current password
                                            </label>
                                            <span class="error-message" id="undefined-error-message" data-valmsg-for="password">The password does not match what we have on record</span>
                                            <input data-val="true" data-val-required="Password must match current password" class="form-input" id="password" name="password" type="password" aria-required="true"></input>
	        
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="newpassword">
                                                New password
                                            </label>
                                            <input class="form-input" id="newpassword" name="newpassword" type="password" required></input>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="confirmpassword">
                                                Confirm new password
                                            </label>
                                            <input class="form-input" id="confirmpassword" name="confirmpassword" type="password" required></input>
                                        </div>
                                        <div class="form-group-btns">
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
                                <form action="" method="post" class="form form-accounts">
                                    <fieldset>
                                        <legend class="form-legend">
                                            <h1 class="form__title">Manage email preferences</h1>
                                            <p class="form__content">Choose when and how we contact you.</p>
                                        </legend>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="communications" name="communications" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="communications">
                                                Receive communication from menzies
                                                <span class="form-checkboxes__subLabel">Receive email updates about Menzies</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="news" name="news" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="news">
                                                News and Updates
                                                <span class="form-checkboxes__subLabel">Receive email updates to news and promotions</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="notifications" name="notifications" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="notifications">
                                                Notifications
                                                <span class="form-checkboxes__subLabel">Stay informed about your account with email notifications including updates on your orders and deliveries</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="waste" name="communications" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="communications">
                                                Third-party emails
                                                <span class="form-checkboxes__subLabel">Sign up to receive emails from our trusted thirs-party partners and stay up to date with the latest offers, deals and promotions</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group-btns">
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
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="credit" name="credit" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="credit">
                                                Credit advice note
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="delivery" name="delivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="delivery">
                                                Delivery note
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Final delivery note
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Weekly invoice
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Recall note (Magazines)
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Voucher recall note
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Remittance advice
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Retail promotion and allocation advice
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Statement
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Tote box chargers
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-checkboxes" data-module="form-checkboxes">
                                            <div class="form-checkboxes__item">
                                                <input class="form-checkboxes__input" id="finaldelivery" name="finaldelivery" type="checkbox" value="carcasses"></input>
                                                <label class="form-label form-checkboxes__label" for="finaldelivery">
                                                Tote box reminder letter
                                                </label>
                                            </div>
                                        </div>
                                        
                                       
                                       
                
                                        <div class="form-group-btns">
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