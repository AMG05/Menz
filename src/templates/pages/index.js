import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import Footer from '@templates/components/footer';
import Table from '@templates/components/table';
import Tabs from '@templates/components/tabs';
import Modal from '@templates/components/modal';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>

    <SecondaryNavigation />

    <div class="banner">
    <PageTitle
        title={'Returns'}>
        Simply change the date filter to locate the correct document You can save an electronic copy of your returns information for your reference. Please note the returns screen does not record any return credit information. All return queries should be recorded in the 'credits' TAB
    </PageTitle>
    </div>


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
<div class="tab__container">
    <div class="wrap">
        <div class="row">
            <div class="col xs-12">
                <div class="tabs__body">
                <div id="recall-note" class="tabs__tabpanel" role="tabpanel">
                    <div class="wrap">
                        <div class="row panel-container">
                            <div class="col xs-6">
                                <div class="left">
                                    <h2 class="table-detail">Date</h2>
                                    <h3 class="table-info">(Today) 12/03/2023</h3>
                                </div>
                            </div>
                            <div class="col xs-6">
                                <div class="table-data__container">
                                    <div class="table-data">
                                        <div class="table-data-left">
                                            <h2 class="table-detail">Recall note number</h2>
                                            <p class="table-info">4411853725</p>
                                        </div>
                                        <div class="table-data-right">
                                            <h2 class="table-detail">Download</h2>
                                            <a href="./abcf32x.pdf" download="How-to-download-file.pdf" class="table-info">PDF</a>
                                        </div>
                                    </div>
                                    <div class="right">
    <button class="table-data__btn-blue modal-confirmation__btn js-modal-confirmation__btn" type="button">Returns not collected today</button>
    <div id="modal-confirmation" aria-labelledby="modal-label" role="region" class="js-modal-confirmation modal-confirmation modal-container" data-modal-toggle="js-modal-confirmation__btn">
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
            <div class="form-radios" data-module="form-radios">
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
                                   </div>
                                
                                
                            </div>
                        </div>
                        <div class="row">
                        <div class="col xs-12">
                            <form class="table__search-form" action="/search-results/" method="get" autocomplete="off" novalidate="">
                                <div class="search__container-table">
                                    
                                    <div class="search-table">
                                        <label class="search__label" for="search">Search information</label>
                                        <input class="search__input-filter" type="search" placeholder="Search" id="search" name="q" />
                                        <button class="search__submit-btn--table" type="submit">
                                        <span class="visuallyhidden">Search</span>
                                        <svg class="search__submit-icon" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24"
                                        width="36px" fill="#333333"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                        </button>
                                    </div>
                                    <div class="search-filter">
                                        <div class="search-filter-element">
                                            <label class="search__label" for="type">Filter by Type:</label>
                                        </div>
                                        <div class="search-filter-element">
                                        <select class="search-filter-select" id="type" name="type">
                                            <option value="all">All Types</option>
                                            <option value="type1">Type 1</option>
                                            <option value="type2">Type 2</option>
                                            <option value="type3">Type 3</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="search__btn">
                                        <button class="table__btn-blue"type="submit">Submit</button>
                                    </div>
                                </div>
                </form>
                      
    </div>
    </div>
    <form class="table-form" action="#" method="post">
        <div class="table__container">
        <Table headings={['Title', 'We delivered', 'You are returning', 'Difference']} />
        {/* <Table headings={['Title 1', 'Title 2', 'Title 3']} /> */}
        
            <div class="table-button__container">
                    <button type="submit" id="amount" class="table__btn-blue">Save for my own reference</button>
                    <button type="submit" class="table__btn-white">Add additional query</button>
            </div>
        </div>
        </form>
        
</div>

                </div>
                </div>
                <div id="future-recall" class="tabs__tabpanel" role="tabpanel" hidden>
                    <div class="wrap">
                        <div class="row panel-container">
                            <div class="col xs-6">
                                <div class="left">
                                    <h2 class="table-detail">Date</h2>
                                    <h3 class="table-info">Tomorrow</h3>
                                </div>
                            </div>
                            <div class="col xs-6">
                                <div class="table-data__container">
                                    <div class="table-data">
                                       
                                        <div class="table-data-right">
                                            <h2 class="table-detail">Download</h2>
                                            <p class="table-info">PDF</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col xs-12">
                            <form class="table__search-form" action="/search-results/" method="get" autocomplete="off" novalidate="">
                                <div class="search__container-table">
                                    
                                    <div class="search-table">
                                        <label class="search__label" for="search">Search information</label>
                                        <input class="search__input-filter" type="search" placeholder="Search" id="search" name="q" />
                                        <button class="search__submit-btn--table" type="submit">
                                        <span class="visuallyhidden">Search</span>
                                        <svg class="search__submit-icon" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24"
                                        width="36px" fill="#333333"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                        </button>
                                    </div>
                                    <div class="search-filter">
                                        <div class="search-filter-element">
                                            <label class="search__label" for="type">Filter by Type:</label>
                                        </div>
                                        <div class="search-filter-element">
                                        <select class="search-filter-select" id="type" name="type">
                                            <option value="all">All Types</option>
                                            <option value="type1">Type 1</option>
                                            <option value="type2">Type 2</option>
                                            <option value="type3">Type 3</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="search__btn">
                                        <button class="table__btn-blue" type="submit">Submit</button>
                                    </div>
                                </div>
                </form>
                      
    </div>
    </div>
    <div class="table__container">
    <table class="table table--statements">
            <thead class="table__head">
                <tr class="table__row">
                <th class="table__header">Title</th>
                <th class="table__header">Start Date</th>
                <th class="table__header">End Date</th>
                </tr>
            </thead>
                <tbody class="table__bd">
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell">
                            <div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div>
                        </td>
                        <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">19/04/2023</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">19/04/2023</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">19/04/2023</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">19/04/2023</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">19/04/2023</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">19/04/2023</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">19/04/2023</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                            <td data-th="Balance" class="table__cell">19/04/2023</td>
                    </tr>
                </tbody>
               
</table>
    </div>

                    <Tabs />
                   
                </div>
                <div id="panel-3" class="tabs__tabpanel" role="tabpanel" hidden>
                <div class="wrap">
                        <div class="row panel-container">
                            <div class="col xs-6">
                                <div class="left">
                                    <h2 class="table-detail">Last chance to Return is:</h2>
                                    <h3 class="table-info">Tomorrow</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table__container">
                    <table class="table table--statements">
            <thead class="table__head">
                <tr class="table__row">
                <th class="table__header">Title</th>
                <th class="table__header">Return By</th>
                <th class="table__header">We deliver</th>
                </tr>
            </thead>
                <tbody class="table__bd">
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell">
                            <div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div>
                        </td>
                        <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">15</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">15</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">15</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">15</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">15</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">15</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">04/04/2023</td>
                        <td data-th="Balance" class="table__cell">15</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                            <td data-th="Transactions" class="table__cell">04/04/2023</td>
                            <td data-th="Balance" class="table__cell">15</td>
                    </tr>
                </tbody>
               
</table>
                    </div>
                    
                </div>
            </div>
            </div>
            </div>
        </div>
    
 



</DefaultLayout>;

export default HomePage;