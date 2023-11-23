import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import Footer from '@templates/components/footer';
import Table from '@templates/components/table';
import Tabs from '@templates/components/tabs';

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

<div class="tab-container">

    <div class="wrap">
        <div class="row">
            <div class="col xs-12">
            <div class="tabs js-tabs">
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
                                            <p class="table-info">PDF</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <button class="table-data__btn-blue">Returns not collected today</button>
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
                                        <button class="table__btn-blue">Submit</button>
                                    </div>
                                </div>
                </form>
                      
    </div>
    </div>
        <div class="table__container">
        <Table />
        <div class="table-button__container">
                <button class="table__btn-blue">Save for my own reference</button>
                <button class="table__btn-white">Add additional query</button>
            </div>
        </div>
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
                                        <button class="table__btn-blue">Submit</button>
                                    </div>
                                </div>
                </form>
                      
    </div>
    </div>
    <Table  title="Title"
            title="Start Date"
            title="End Date" />



                       
                    <Tabs />
                    <p>Panel 2</p>
                    <p>
                        <a href="/">Test link</a>
                    </p>
                    <p>
                        <a href="/">Test link</a>
                    </p>
                </div>
                <div id="panel-3" class="tabs__tabpanel" role="tabpanel" hidden>
                    <p>Panel 3</p>
                    <p>
                        <a href="/">Test link</a>
                    </p>
                    <p>
                        <a href="/">Test link</a>
                    </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    
 



</DefaultLayout>;

export default HomePage;