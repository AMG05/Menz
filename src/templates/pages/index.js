import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import Footer from '@templates/components/footer';

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

<div class="wrap container">
    <div class="row">
        <div class="col xs-12">
            <div class="tabs js-tabs tab-container">
                <div class="tabs__tabslist" role="tablist">
                    <a id="tab-1" class="tabs__tab js-tabs__link" href="#panel-1" role="tab">Recall note</a>
                    <a id="tab-2" class="tabs__tab js-tabs__link" href="#panel-2" role="tab">Future recalls</a>
                    <a id="tab-3" class="tabs__tab js-tabs__link" href="#panel-3" role="tab">Last chance for credit</a>
                </div>
                <div id="panel-1" class="tabs__tabpanel" role="tabpanel">
                    <div class="wrap">
                        <div class="row">
                            <div class="col xs-6">
                                <div class="left">
                                    <h2 class="table-detail">Date</h2>
                                    <h3 class="table-info">(Today) 12/03/2023</h3>
                                </div>
                            </div>
                            <div class="col xs-6">
                                <div class="right">
                                    <h2 class="table-detail">Recall note number</h2>
                                    <p class="table-info">4411853725</p>
                                </div>
                                <div class="right">
                                    <h2 class="table-detail">Download</h2>
                                    <p class="table-info">PDF</p>
                                    <button class="table__btn-blue">Returns not collected today</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="panel-2" class="tabs__tabpanel" role="tabpanel" hidden>
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

    <div class="col xs-12">
            <label for="search">Search:</label>
            <input type="text" id="search" name="search" placeholder="Search by title" />
            <label for="type">Filter by Type:</label>
                <select id="type" name="type">
                    <option value="all">All Types</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="type3">Type 3</option>
                </select>
            <button>Submit</button>
    </div>
    <div class="table__container">
    <table class="table table--statements">
            <thead class="table__head">
                <tr class="table__row">
                    <th class="table__header">Title</th>
                        <th class="table__header">We delivered</th>
                        <th class="table__header">You are returning</th>
                        <th class="table__header">Difference</th>
                </tr>
            </thead>
                <tbody class="table__bd">
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><a class="table__link" href="/" tabindex="-1">Auto Express</a></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><a class="table__link" href="/" tabindex="-1">Auto Express</a></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><a class="table__link" href="/" tabindex="-1">Auto Express</a></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><a class="table__link" href="/" tabindex="-1">Auto Express</a></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><a class="table__link" href="/" tabindex="-1">Auto Express</a></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                    </tr>
                </tbody>
               
        </table>
        <div class="table-button__container">
                <button class="table__btn-blue">Save for my own reference</button>
                <button class="table__btn-white">Add additional query</button>
            </div>
        </div>
</div>
   

</DefaultLayout>;

export default HomePage;