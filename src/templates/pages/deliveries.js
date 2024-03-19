import { h, Fragment } from 'preact';
import DefaultLayout from '@layouts/default';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import TabularData from '@templates/components/tabular';
import PrimaryButton from '@templates/components/forms/primarybutton';
import DataDropdown from '@templates/components/datadropdown';
import DataDetail from '@templates/components/Datadetail';
import SearchBar from '@templates/components/searchbar';
import SearchandFilter from '@templates/components/SearchandFilter';
import Input from '@templates/components/forms/textfieldinput';
import FormSelect from '@templates/components/forms/formselect';
import Table3 from '@templates/components/tables3';
import PageNav from '@templates/components/pagenav';

// import Tabs from '@templates/components/tabs';

const Deliveries = () =>

<DefaultLayout>

<SecondaryNavigation
    ariaLabel="Site navigation"
    pages={[
        { title: 'Home', link: '/' },
        { title: 'Deliveries', link: '/deliveries', active: true },
        { title: 'Returns', link: '/returns' },
        { title: 'Order Management', link: '/ordermanagement' },
        { title: 'Credits', link: '/credits' },
        { title: 'Invoices', link: '/invoices' },
        { title: 'Document Archive', link: '/archive' }
    ]}
    />



    <PageTitle
        title={'Deliveries'}>
        Your electronic delivery screen allows you to check your intended delivery by date, record any necessary delivery claims on the day of delivery, register any over supplies to be charged to your account and download your delivery note as a PDF or as an Excel spreadsheet.
    </PageTitle>

    <PageNav
        pages={[
            {title: 'Deliveries', link: '/', active: true },
            {title: 'Final Delivery Note', link: '/'},
    ]} />

    <div class="page-content">
        <div class="wrap">
            <div class="page-content__header">
                <form class="js-select-form" method="get" action="#">
                    <div class="dropdown">
                        <label class="label" for="invoices">Date</label>
                        <span class="field-validation-valid" role="alert" data-valmsg-for="invoices"></span>
                        <select id="invoices" name="invoices" class="dropdown__input">
                            <option value="12/03/2023">(Today) 12/03/2023</option>
                            <option value="12/03/2023">(Today) 12/03/2023</option>
                        </select>
                    </div>
                </form>
            <div class="page-content__header--right">
                    <div class="detail">
                        <h2 class="detail__header">Delivery note number:</h2>
                        <p class="detail__item">2023-10-06</p>
                    </div>
                    <div class="detail">
                        <h2 class="detail__header">Download</h2>
                        <ul class="detail__list">
                            <li class="detail__list-item">
                                <a class="detail__item text-underline" href="#" download="file-name">PDF</a>
                            </li>
                            <li class="detail__list-item">
                                <a class="detail__item text-underline" href="#" download="file-name">Excel</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    <div class="page-content__header">
        <div class="page-content__header--left">
            <form class="form--filters" id="filters" role="search">
                <div class="search">
                    <label class="label" for="navSearch">Search</label>
                    <div class="search__containervs2 ">
                        <div class="search__input-containervs2">
                                <input class="search__inputvs2" type="search" id="navSearch" name="navSearch" />
                        </div>
                    </div>
                </div>
                <div class="select  ">
                    <label class="label" for="typeFilter">Filter by type</label>
                    <div class="select__input-containervs2">
                        <select id="typeFilter" name="typeFilter" class="select__inputvs2">
                            <option value="all">All</option>
                            <option value="Dailies">Dailies</option>
                            <option value="Magazine">Magazine</option>
                            <option value="Sundays">Sundays</option>
                            <option value="Confectionary">Confectionary</option>
                            <option value="Vouchers">Vouchers</option>
                        </select>
                     </div>
                </div>
                <button class="btn btn--primary" type="submit">Submit</button>
            </form>
        </div>
        <div class="page-content__header--right"></div>
    </div>
<div class="alert__wrapper full-width">
    <div class="alert__content">
        <div class="alert__text">
            <h2 class="alert__heading">Your changes have been submitted.</h2><p class="alert__description">Your changes will be processed as soon as possible.</p>
            <p class="alert__additional-info"> Reference number 123445513131</p>
            <p></p>
        </div>
    </div>
    <div class="alert__action">
        <a class="btn btn--primary" href="#">View reference</a>
    </div>
</div>
<div class="js-filter-search">
    <div class="table__container">
        <form class="js-validate-deliveries" action="#" method="get" novalidate="novalidate">
            <div class="table__heading-container">
                <h2 class="table__heading">Report delivery charges</h2>
            </div>
        <table class="table table--deliveries table--padded table--fixed is--link ">
                    <thead class="table__head">
                        <tr class="table__row">
                    <th class="table__th  " span="col">
                        <p class="  table__th-text">Title</p>
                    </th>
                    <th class="table__th  " span="col">
                    <p class="  table__th-text">We delivered</p>
                    </th>
                    <th class="table__th  " span="col">
                        <p class="  table__th-text">You received</p>
                    </th>
                    <th class="table__th  " span="col">
                        <p class="  table__th-text">Difference</p>
                    </th>
                    <th class="table__th text-left " span="col">
                        <p class="  table__th-text">Action</p>
                    </th>
                    <th class="table__th  " span="col">
                        <p class="  table__th-text">Notes</p>
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
                            <td class="table__td " data-th="You received">
                                <div class="text-field">
                                    <div class="text-field__input-container">
                                        <input aria-label="Quantity" class="text-field__input js-difference " id="queryQuantity" name="queryQuantity" type="number" data-val="true" data-val-maxlength="Quantity must be less than 255 characters" data-val-maxlength-max="255" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57))" />
                                            </div>
                                            </div>
                                            </td>
                                            <td class="table__td " data-th="Difference" aria-live="polite">
                                                <p class="table__td-title  " data-type=""></p>
                                                </td>
                                                <td class="table__td text-left" data-th="Action">
                                                    <p class="table__td-title" aria-live="polite"></p>
                                                    <div class="select js-difference-select ">
                                                        <div class="select__input-container">
                                                            <select id="action" name="action" aria-label="Delivery Charge Action" class="select__input" aria-required="true" data-val="true" data-val-required="Action is required" aria-live="polite"><option value="Select an Action">Select an Action</option>
                                                            <option value="Credit Request">Credit Request</option>
                                                            <option value="Replenish Request">Replenish Request</option>
                                                            </select></div></div></td><td class="table__td " data-th="Notes">
                                                                <p class="table__td-title  " data-type="">Late Supply - now delivered</p>
                                                                </td>
                                                                </tr>
                                                                </tbody>
                </table>
        </form>
    </div>
    <div class="table__container">
    <div class="table__heading-container">
    <h2 class="table__heading">Summary</h2>
    </div><table class="table table--invoices ">
    <thead class="table__head">
    <tr class="table__row">
    <th class="table__th  " span="col">
    <p class="  table__th-text">Description</p>
    </th><th class="table__th  " span="col">
    <p class="  table__th-text">Retail Value</p>
    </th><th class="table__th  " span="col">
    <p class="  table__th-text">Net</p>
    </th><th class="table__th  " span="col">
        <p class="  table__th-text">VAT</p></th>
        <th class="table__th  " span="col"><p class="  table__th-text">Value (£)</p></th>
        </tr></thead><tbody class="table__body">
            <tr class="table__row "><td class="table__td " data-th="Description">
                <p class="table__td-title  " data-type="">News and Daily Collection Periodicals</p>
                </td><td class="table__td " data-th="Retail Value">
                    <p class="table__td-title  " data-type="">£39.35</p></td>
                    <td class="table__td " data-th="Net"><p class="table__td-title  " data-type="">£39.35</p></td>
                    <td class="table__td " data-th="VAT"><p class="table__td-title  " data-type="">20.00</p></td>
                    <td class="table__td " data-th="Value (£)"><p class="table__td-title  " data-type="">£39.35</p></td>
                    </tr>
                    <tr class="table__row ">
                        <td class="table__td " data-th="Description">
                            <p class="table__td-title  " data-type="">News and Daily Collection Periodicals</p>
                            </td>
                            <td class="table__td " data-th="Retail Value">
                                <p class="table__td-title  " data-type="">£39.35</p>
                                </td>
                                <td class="table__td " data-th="Net">
                                    <p class="table__td-title  " data-type="">£39.35</p></td>
                                    <td class="table__td " data-th="VAT"><p class="table__td-title  " data-type="">20.00</p></td>
                                    <td class="table__td " data-th="Value (£)"><p class="table__td-title  " data-type="">£39.35</p></td>
                                    </tr><tr class="table__row ">
                                        <td class="table__td " data-th="Description">
                                        <p class="table__td-title  " data-type="">News and Daily Collection Periodicals</p>
                                        </td><td class="table__td " data-th="Retail Value">
                                            <p class="table__td-title  " data-type="">£39.35</p></td>
                                            <td class="table__td " data-th="Net"><p class="table__td-title  " data-type="">£39.35</p>
                                            </td><td class="table__td " data-th="VAT"><p class="table__td-title  " data-type="">20.00</p>
                                            </td><td class="table__td " data-th="Value (£)"><p class="table__td-title  " data-type="">£39.35</p></td></tr>
                                            <tr class="table__row "><td class="table__td " data-th="Description">
                                                <p class="table__td-title  " data-type="">News and Daily Collection Periodicals</p></td>
                                                <td class="table__td " data-th="Retail Value"><p class="table__td-title  " data-type="">£39.35</p></td>
                                                <td class="table__td " data-th="Net"><p class="table__td-title  " data-type="">£39.35</p></td>
                                                <td class="table__td " data-th="VAT"><p class="table__td-title  " data-type="">20.00</p></td>
                                                <td class="table__td " data-th="Value (£)"><p class="table__td-title  " data-type="">£39.35</p></td>
                                                </tr></tbody></table></div>
</div>
</div>

       
         </div>
</DefaultLayout>;


export default Deliveries;