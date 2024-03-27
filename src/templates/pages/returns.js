import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import Footer from '@templates/components/footer';
import Table from '@templates/components/table';
import Tabs from '@templates/components/tabs';
import Modal from '@templates/components/modal';
import PrimaryButton from '@templates/components/forms/primarybutton';
import PageNav from '@templates/components/pagenav';
import PageContent from '@templates/components/pagecontent';

// export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>

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

   
    <PageTitle
        title={'Returns'}>
        Simply change the date filter to locate the correct document You can save an electronic copy of your returns information for your reference. Please note the returns screen does not record any return credit information. All return queries should be recorded in the 'credits' TAB
    </PageTitle>

    <div class="tabs js-tabs">
        <div class="wrap">
            <div class="row">
                <div class="tabs__tabslist" role="tablist">
                        <a 
                        id="tab-1" 
                        class="tabs__tab js-tabs__link" 
                        href="#recall-note" 
                        role="tab">
                        Recall note
                        </a>
                        <a
                        id="tab-2" 
                        class="tabs__tab js-tabs__link" 
                        href="#future-recall" 
                        role="tab">
                        Future recalls
                        </a>
                        <a
                        id="tab-3" 
                        class="tabs__tab js-tabs__link" 
                        href="#panel-3" 
                        role="tab">
                        Last chance for credit
                        </a>
                </div>
            </div>
        </div>
    </div>


<div id="recall-note" class="tabs__tabpanel" role="tabpanel">
    <div class="page-content">
        <div class="wrap">
            <div class="page-content__header">
                <form class="js-select-form" method="get" action="#">
                    <div class="dropdown">
                        <label class="label" for="returns">Date</label>
                            <span class="field-validation-valid" role="alert"></span>
                            <select id="returns" name="returns" class="dropdown__input">
                                <option value="12/03/2023">(Today) 12/03/2023</option>
                                <option value="13/03/2023">13/03/2023</option>
                                <option value="14/03/2023">14/03/2023</option>
                            </select>
                    </div>
                </form>
                <div class="page-content__header--right">
                    <div class="detail">
                        <h2 class="detail__header">Recall note number:</h2>
                        <p class="detail__item">4411853725</p>
                    </div>
                    <div class="detail">
                        <h2 class="detail__header">Download:</h2>
                        <a class="detail__item text-underline" href="#" download="file_name">PDF</a>
                    </div>
                </div>
            </div>
            <div class="page-content__header justify-end">
                <a class="btn btn--primary js-modal-confirmation__btn" href="#">Returns not collected today</a>
            </div>

<div id="modal-confirmation" aria-labelledby="modal-label" role="region" class="js-modal-confirmation modal-confirmation modal-container" data-modal-toggle="js-modal-confirmation__btn">
    <div class="">
        <div class="modal" role="alertdialog" aria-labelledby="modal-label" aria-describedby="modal-description">
            <div class="modal__header">
                    <h1 class="modal__header-title">Returns not collected</h1>
                    <button type="" class="modal-confirmation__btn-close js-modal-confirmation__btn" aria-label="close">
                    <span class="modal-confirmation__btn-close-icon-label">Close</span>
                        <svg class="exclusive-nav__close-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17.999 18">
                            <g data-name="Group 11561" fill="#333">
                            <path data-name="Path 12311" d="M16.687 18-.001 1.312 1.31 0l16.688 16.689Z"></path>
                            <path data-name="Path 12313" d="M18 1.311 1.311 18 0 16.689 16.688 0Z"></path>
                            </g>
                        </svg>
                    </button>
            </div>
        <form class="modal__form modal-confirmation__form" action="#" method="post">
            <p id="modal description" class="modal-description">We apologize for any inconvenience caused by uncollected returns. To help us better track and collect your returns, please indicate the number of days worth of returns that have not been collected. </p>
            <p d="modal description" class="modal-form-info">Please select either 1 day or more than 1 day from the option below.</p>
            <div class="radio__container" data-module="form-radios">
                <div class="form-radios__item">
                    <input class="form-radios__input" type="radio" id="oneDay" name="duration" value="1" />
                    <label class="form-radios__label" for="oneDay">
                        1 day
                    </label>
                </div>
                <div class="form-radios__item">
                    <input class="form-radios__input" type="radio" id="manyDays" name="duration" value="2" />
                    <label class="form-radios__label" for="manyDays">
                        More than 1 day
                    </label>
                </div>
            </div>
            <div class="modal-confirmation__row">
                <button type="submit" class="modal-confirmation__confirm">Submit request for collection</button>
                <button type="submit" class="modal-confirmation__cancel js-modal-confirmation__btn">Cancel</button>
            </div>
        </form>
    </div>
    </div>
</div>

            <PageContent />

            <div class="alert__wrapper full-width">
                <div class="alert__content">
                    <div class="alert__text">
                        <h2 class="alert__heading">Your returns information was successfully saved!</h2>
                        <p class="alert__description">Your returns information has been saved for your own reference and will be reflected on the recall note</p>
                    </div>
                </div>
            </div>

<div class="table__container">
    <form class="js-validate-deliveries js-filter-search" action="#" method="get">
        <table class="table table--returns table-fixed is--link">
            <thead class="table__head">
                <tr class="table__row">
                    <th class="table__th" span="col">
                        <p class="table__th-text">Title</p>
                    </th>
                    <th class="table__th" span="col">
                        <p class="table__th-text">We delivered</p>
                    </th>
                    <th class="table__th" span="col">
                        <p class="table__th-text">You are returning</p>
                    </th>
                    <th class="table__th" span="col">
                        <p class="table__th-text">Difference</p>
                    </th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr class="table__row " data-title-text="Auto Express" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>                     
                    </td>
                    <td class="table__td " data-th="We delivered">
                        <p class="table__td-title  " data-type="">12</p>
                    </td>
                    <td class="table__td text-left" data-th="You are returning">
                        <div class="text-field">
                            <div class="text-field__input-container">
                                <input aria-label="Quantity" class="text-field__input js-difference " id="queryQuantity" name="queryQuantity" type="number" data-val="true" data-val-maxlength="Quantity must be less than 255 characters" data-val-maxlength-max="255" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57))" />
                            </div>
                        </div>         
                    </td>
                    <td class="table__td " data-th="Difference" aria-live="polite">
                        <p class="table__td-title  " data-type=""></p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Disney" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Disney</a>
                            <div class="table__td-details">
                                 <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                 </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="We delivered">
                        <p class="table__td-title  " data-type="">12</p>
                    </td>
                    <td class="table__td text-left" data-th="You are returning">
                        <div class="text-field">
                            <div class="text-field__input-container">
                                <input aria-label="Quantity" class="text-field__input js-difference " id="queryQuantity" name="queryQuantity" type="number" data-val="true" data-val-maxlength="Quantity must be less than 255 characters" data-val-maxlength-max="255" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57))" />
                            </div>
                        </div>
                    </td>
                    <td class="table__td " data-th="Difference" aria-live="polite">
                        <p class="table__td-title  " data-type=""></p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="The Sun" data-title-type="Dailies">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">The Sun</a>
                            <div class="table__td-details">
                                <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                </span>
                                <span class="table__td-subtitle">Dailies</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="We delivered">
                        <p class="table__td-title  " data-type="">12</p>
                    </td>
                    <td class="table__td text-left" data-th="You are returning">
                        <div class="text-field">
                            <div class="text-field__input-container">
                                <input aria-label="Quantity" class="text-field__input js-difference " id="queryQuantity" name="queryQuantity" type="number" data-val="true" data-val-maxlength="Quantity must be less than 255 characters" data-val-maxlength-max="255" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57))" />
                            </div>
                        </div>
                    </td>
                    <td class="table__td " data-th="Difference" aria-live="polite">
                        <p class="table__td-title  " data-type=""></p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Confectionary Test" data-title-type="Confectionary">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Confectionary Test</a>
                            <div class="table__td-details">
                                 <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg></span>
                                <span class="table__td-subtitle">Confectionary</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="We delivered">
                        <p class="table__td-title  " data-type="">12</p>
                    </td>
                    <td class="table__td text-left" data-th="You are returning">
                        <div class="text-field">
                            <div class="text-field__input-container">
                                <input aria-label="Quantity" class="text-field__input js-difference " id="queryQuantity" name="queryQuantity" type="number" data-val="true" data-val-maxlength="Quantity must be less than 255 characters" data-val-maxlength-max="255" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57))" />
                            </div>
                        </div>
                    </td>
                    <td class="table__td " data-th="Difference" aria-live="polite">
                        <p class="table__td-title  " data-type=""></p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Sundays Test" data-title-type="Sundays">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Sundays Test</a>
                            <div class="table__td-details">
                                <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg></span><span class="table__td-subtitle">Sundays</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="We delivered">
                        <p class="table__td-title  " data-type="">12</p>
                    </td>
                    <td class="table__td text-left" data-th="You are returning">
                        <div class="text-field"><div class="text-field__input-container">
                            <input aria-label="Quantity" class="text-field__input js-difference " id="queryQuantity" name="queryQuantity" type="number" data-val="true" data-val-maxlength="Quantity must be less than 255 characters" data-val-maxlength-max="255" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57))" />
                        </div>
                    </div>
                    </td>
                    <td class="table__td " data-th="Difference" aria-live="polite">
                        <p class="table__td-title  " data-type=""></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</div>
        </div>
    </div>
</div>
             
<div id="future-recall" class="tabs__tabpanel" role="tabpanel" hidden>
    <div class="page-content">
        <div class="wrap">
            <div class="page-content__header">
                <form class="js-select-form" method="get" action="#">
                    <div class="dropdown">
                        <label class="label" for="returns">Date</label>
                            <span class="field-validation-valid" role="alert"></span>
                            <select id="returns" name="returns" class="dropdown__input">
                                <option value="12/03/2023">(Today) 12/03/2023</option>
                                <option value="13/03/2023">13/03/2023</option>
                                <option value="14/03/2023">14/03/2023</option>
                            </select>
                    </div>
                </form>
                <div class="page-content__header--right">
                    <div class="detail">
                        <h2 class="detail__header">Download:</h2>
                    </div>
                    <div class="detail">
                        <a class="detail__item text-underline" href="#" download="file_name">PDF</a>
                    </div>
                </div>
            </div>
            <div class="table__container">
    <form class="js-validate-deliveries js-filter-search" action="#" method="get">
        <table class="table table--returns table-fixed is--link">
            <thead class="table__head">
                <tr class="table__row">
                    <th class="table__th" span="col">
                        <p class="table__th-text">Title</p>
                    </th>
                    <th class="table__th" span="col">
                        <p class="table__th-text">Start Date</p>
                    </th>
                    <th class="table__th" span="col">
                        <p class="table__th-text">End date</p>
                    </th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr class="table__row " data-title-text="Auto Express" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>                     
                    </td>
                    <td class="table__td " data-th="Start date">
                        <p class="table__td-title  " data-type="">04/04/2023</p>
                    </td>
                    <td class="table__td " data-th="End date">
                        <p class="table__td-title  " data-type="">19/04/2023</p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Disney" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                 <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                 </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="Start date">
                        <p class="table__td-title  " data-type="">04/04/2023</p>
                    </td>
                    <td class="table__td " data-th="End date">
                        <p class="table__td-title  " data-type="">19/04/2023</p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Disney" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                 <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                 </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="Start date">
                        <p class="table__td-title  " data-type="">04/04/2023</p>
                    </td>
                    <td class="table__td " data-th="End date">
                        <p class="table__td-title  " data-type="">19/04/2023</p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Disney" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                 <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                 </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="Start date">
                        <p class="table__td-title  " data-type="">04/04/2023</p>
                    </td>
                    <td class="table__td " data-th="End date">
                        <p class="table__td-title  " data-type="">19/04/2023</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</div> 
</div>    
 
</div>
</div>
<div id="panel-3" class="tabs__tabpanel" role="tabpanel" hidden>
<div class="page-content">
        <div class="wrap">
            <div class="page-content__header">
                <form class="js-select-form" method="get" action="#">
                    <div class="dropdown">
                        <label class="label" for="returns">Last chance to Return is:</label>
                            <span class="field-validation-valid" role="alert"></span>
                            <select id="returns" name="returns" class="dropdown__input">
                                <option value="12/03/2023">(Today) 12/03/2023</option>
                                <option value="13/03/2023">13/03/2023</option>
                                <option value="14/03/2023">14/03/2023</option>
                            </select>
                    </div>
                </form>
            </div>
            <div class="table__container">
    <form class="js-validate-deliveries js-filter-search" action="#" method="get">
        <table class="table table--returns table-fixed is--link">
            <thead class="table__head">
                <tr class="table__row">
                    <th class="table__th" span="col">
                        <p class="table__th-text">Title</p>
                    </th>
                    <th class="table__th" span="col">
                        <p class="table__th-text">Start Date</p>
                    </th>
                    <th class="table__th" span="col">
                        <p class="table__th-text">End date</p>
                    </th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr class="table__row " data-title-text="Auto Express" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>                     
                    </td>
                    <td class="table__td " data-th="Start date">
                        <p class="table__td-title  " data-type="">04/04/2023</p>
                    </td>
                    <td class="table__td " data-th="End date">
                        <p class="table__td-title  " data-type="">19/04/2023</p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Disney" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                 <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                 </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="Start date">
                        <p class="table__td-title  " data-type="">04/04/2023</p>
                    </td>
                    <td class="table__td " data-th="End date">
                        <p class="table__td-title  " data-type="">19/04/2023</p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Disney" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                 <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                 </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="Start date">
                        <p class="table__td-title  " data-type="">04/04/2023</p>
                    </td>
                    <td class="table__td " data-th="End date">
                        <p class="table__td-title  " data-type="">19/04/2023</p>
                    </td>
                </tr>
                <tr class="table__row " data-title-text="Disney" data-title-type="Magazine">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Auto Express</a>
                            <div class="table__td-details">
                                 <span class="table__td-subtitle">12/03/2023 <svg class="svg__diamond" width="8.485" height="8.485" viewBox="0 0 8.485 8.485"><rect id="Rectangle_1147" data-name="Rectangle 1147" width="6" height="6" transform="translate(0 4.243) rotate(-45)" fill="#898aa2"></rect></svg>
                                 </span>
                                <span class="table__td-subtitle">Magazine</span>
                            </div>
                    </td>
                    <td class="table__td " data-th="Start date">
                        <p class="table__td-title  " data-type="">04/04/2023</p>
                    </td>
                    <td class="table__td " data-th="End date">
                        <p class="table__td-title  " data-type="">19/04/2023</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</div> 
</div>    
 
</div>    
                    
                    
                    
</div>
            
           
           
         
    
 



</DefaultLayout>;

export default HomePage;