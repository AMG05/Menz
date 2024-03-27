import { h, Fragment } from 'preact';
import DefaultLayout from '@templates/layouts/default';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import PageTitle from '@templates/components/pagetitle';
import PageNav from '@templates/components/pagenav';
import PageContent from '@templates/components/pagecontent';


const Credit = () => <DefaultLayout>

    
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
        title={'Credits'}>
        To check your return credits, simple select the appropriate date from the filter options. If you notice any incorrect credits, you can use the 'Query' option to request a correction. In case a return credit does not appear on your credit advice note, you can 'Add Additional Query'. Additionally, you can download your Credit Advice Notes for future reference. 
</PageTitle>

<PageNav
        pages={[
            {title: 'Credit Advice Note', link: '/', active: true },
    ]} />

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

            <PageContent />

<div class="js-filter-search">
    <div class="table__container">
        <table class="table table--invoices table--credits table--padded table--fixed is--link">
            <caption class="table__caption">Handling Allowance Recharges</caption>
            <thead class="table__head">
                <tr class="table__row">
                    <th class="table__th " span="col">
                        <p class="table__th-text">Title</p>
                        <a class="table__sort-btn" href="#">
                        <svg width="9" height="12" viewBox="0 0 9 12"><g id="Group_11895" data-name="Group 11895" transform="translate(-277 -2)"><path id="Polygon_1" data-name="Polygon 1" d="M4.5,0,9,5H0Z" transform="translate(286 14) rotate(180)" fill="#141446" opacity="0.8"></path><path id="Polygon_2" data-name="Polygon 2" d="M4.5,0,9,5H0Z" transform="translate(277 2)" fill="#141446" opacity="0.8"></path></g></svg>
                        <svg width="9" height="12" viewBox="0 0 9 12"><g id="Group_11895" data-name="Group 11895" transform="translate(-277 -2)"><path id="Polygon_1" data-name="Polygon 1" d="M4.5,0,9,5H0Z" transform="translate(286 14) rotate(180)" fill="#141446" opacity="0.8"></path><path id="Polygon_2" data-name="Polygon 2" d="M4.5,0,9,5H0Z" transform="translate(277 2)" fill="#141446" opacity="0.8"></path></g></svg>
                        </a>
                    </th>
                    <th class="table__th " span="col">
                        <p class=" table__th-text">Quantity</p>
                    </th>
                    <th class="table__th " span="col">
                        <p class=" table__th-text">Action</p>
                    </th>
                    <th class="table__th " span="col">
                        <p class=" table__th-text">Value</p>
                    </th>
                    <th class="table__th " span="col">
                        <p class=" table__th-text">Net</p>
                    </th>
                    <th class="table__th " span="col">
                        <p class=" table__th-text">Retail Price</p>
                    </th>
                    <th class="table__th " span="col">
                        <p class=" table__th-text">Retail Value</p>
                    </th>
                    <th class="table__th " span="col">
                        <p class=" table__th-text">Discount %</p>
                    </th>
                    <th class="table__th " span="col">
                        <p class=" table__th-text">Discount Price</p>
                    </th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr class="table__row " data-title-text="Beautiful Homes" data-title-type="Vouchers">
                    <td class="table__td " data-th="Title">
                        <a class="table__link" href="#">Beautiful Homes</a>
                        <span class="table__td-subtitle">Vouchers</span>
                    </td>
                    <td class="table__td " data-th="Quantity">
                        <p class="table__td-title  " data-type="">15</p></td><td class="table__td " data-th="Action">
                        <button class="btn btn--secondary btn--xsmall js-modal-query__btn-1">Query</button>
                     </td>
                    <td class="table__td " data-th="Value">
                        <p class="table__td-title  " data-type="">-0.04</p>
                    </td>
                    <td class="table__td " data-th="Net">
                        <p class="table__td-title  " data-type="">-0.04</p>
                    </td>
                    <td class="table__td " data-th="Retail Price">
                        <p class="table__td-title  " data-type="">£1.10</p>
                    </td>
                    <td class="table__td " data-th="Retail Value">
                        <p class="table__td-title  " data-type="">£1.10</p>
                    </td>
                    <td class="table__td " data-th="Discount %">
                        <p class="table__td-title  " data-type="">-22.12</p>
                    </td>
                    <td class="table__td " data-th="Discount Price">
                        <p class="table__td-title  " data-type="">0.00</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<nav class="pagination" role="navigation" aria-label="Pagination navigation">
    <div class="pagination__spacer"></div>
        <ul class="pagination__list">
            <li class="pagination__list-item">
                <a class="pagination__link pagination__previous" href="#">
                <span class="pagination__page-text">Previous</span>
                </a>
            </li>
            <li class="pagination__list-item is--active">
                <a class="pagination__link" href="#" aria-label="Go to page 1" aria-current="true">1</a>
            </li>
            <li class="pagination__list-item ">
                <a class="pagination__link" href="#" aria-label="Go to page 2">2</a>
            </li>
            <li class="pagination__list-item ">
                <a class="pagination__link" href="#" aria-label="Go to page 3">3</a>
            </li>
            <li class="pagination__list-item ">
                <a class="pagination__link" href="#" aria-label="Go to page 4">4</a>
            </li>
            <li class="pagination__list-item ">
                <a class="pagination__link" href="#" aria-label="Go to page 5">5</a>
            </li>
            <li class="pagination__list-item">
                <span class="pagination__ellipsis">...</span>
            </li>
            <li class="pagination__list-item">
                <a class="pagination__link pagination__next" href="#">
                <span class="pagination__page-text">Next</span></a>
            </li>
        </ul>
        <div class="pagination__summary">Showing 1-10 of 50 results</div>
     </nav>
    </div>
</div>


    



    </DefaultLayout>;



export default Credit;