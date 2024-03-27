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

            </div>
            </div>


    



    </DefaultLayout>;



export default Credit;