import { h, Fragment } from 'preact';
import DefaultLayout from '@layouts/default';
import PageTitle from '@templates/components/pagetitle';
import ThirdNavigation from '@templates/components/thirdnavigation';
import Tabs from '@templates/components/tabs';
import Logo from '@templates/components/logo';
import TabularData from '@templates/components/tabular';
import SearchBar from '@templates/components/searchbar';
import SearchandFilter from '@templates/components/SearchandFilter';
import SearchandSubmit from '@templates/components/Searchandsubmit';
import DecreaseIncreaseButtons from '../../js/modules/forms/components/IncreaseDecreaseForm';

const OrderManagement = () =>

<DefaultLayout>


    <PageTitle
        title={'Order Management'}>
        This multi-function TAB allows you to access and amend your Standing Orders, Add new titles to your Standing Order list, Order Extra Supplies of current issues where stock is available, View and self-manage your Back Order Book and Access and download any available Allocation Advice Notes.’
    </PageTitle>


<Tabs
    tabsList={[
    { title: 'Current Orders', content: <Fragment>
    <ThirdNavigation
        links={[
            { title: 'Dailies', href: '#' },
            { title: 'Magazines', href: '#magazines' },
            { title: 'Sundays', href: '#' },
            { title: 'Part-Works', href: '#' },
            { title: 'Stickers', href: '#' },
            { title: 'Confectionary', href: '#' },
            { title: 'Vouchers', href: '#' },
            { title: '+Add to order', href: '#' },
        ]} />


<SearchandSubmit />

    <TabularData
        caption={''}
        head={[
    { value: 'Title' },
    { value: 'Current' },
    { value: 'Next' },
    { value: 'After' },
    { value: 'Actions' },
]}
        body={[
        {
            columns: [
                { value: '25 Beautiful Homes' },
                { value: '15' },
                { value: '20' },
                { value: '16' },
                { value: <div class="">
                    <button class="btn-white modal-confirmation__btn js-modal-confirmation__btn" type="button">Edit</button>
                        <div id="modal-confirmation" aria-labelledby="modal-label" role="region" class="js-modal-confirmation modal-confirmation modal-container" data-modal-toggle="js-modal-confirmation__btn">
                            <div class="modal" role="alertdialog" aria-labelledby="modal-label" aria-describedby="modal-description">
                                <div class="modal__header">
                                    <h1 class="modal__header-title">Auto Express - <span class="modal__header-title-small">Edit my Order</span></h1>
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
                        <h2 class="modal-confirmation__subtitle" id="modal-label">Specify how many copies you want to receive each day</h2>
                        
                        <div id="reactyform"></div>
                        <DecreaseIncreaseButtons
                            max={10} />
                    </div>
                </div>
                <button class="btn">Delete</button></div> },
                
            ]
},
{
columns: [
    { value: '25 Beautiful Homes' },
    { value: '15' },
    { value: '20' },
    { value: '16' },
    { value: <div><button>Edit</button><button>Delete</button></div> },
]
},
{
columns: [
    { value: '25 Beautiful Homes' },
    { value: '15' },
    { value: '20' },
    { value: '16' },
    { value: <div><button>Edit</button><button>Delete</button></div>  } ,
]
}
]}
/>

        </Fragment>, active: 'true' },
    { title: 'Back Orders', content: <Fragment><p>Test 2</p><p>Testing 2</p></Fragment> },
    { title: 'Allocation Advice Notes', content: <Fragment><p>Test 2</p><p>Testing 2</p></Fragment> }
  ]}
/>


;


</DefaultLayout>;


export default OrderManagement;