import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import PageTitle from '@templates/components/pagetitle';
import SecondaryNavigation from '@templates/components/secondarynavigation';
import TabularData from '@templates/components/tabular';
// import Tabs from '@templates/components/tabs';

const Deliveries = () =>

<DefaultLayout>

<SecondaryNavigation
    links={[
        { title: 'Home', href: '/home' },
        { title: 'Deliveries', href: '/deliveries' },
        { title: 'Returns', href: '/returns' },
        { title: 'Order Management', href: '/ordermanagement' },
        { title: 'Credits', href: '/credits' },
        { title: 'Invoices', href: '/invoices' },
        { title: 'Document Archive', href: '/archive' }]}
    />


<div class="banner">
    <PageTitle
        title={'Deliveries'}>
        Your electronic delivery screen allows you to check your intended delivery by date, record any necessary delivery claims on the day of delivery, register any over supplies to be charged to your account and download your delivery note as a PDF or as an Excel spreadsheet.
    </PageTitle>
    </div>

{/* <Tabs
    tabsList={[
        { title: "Deliveries", content: <Fragment><p>bla bla</p></Fragment>},
        { title: "Final Delivery Note", content: <Fragment><p>pa pa</p></Fragment>},
        { title: "Affected by Price", content: <Fragment><p>tra tra</p></Fragment>, active: "true"},
]} /> */}

<div class="tabs js-tabs">
        <div class="wrap">
            <div class="row">
                <div class="tabs__tabslist" role="tablist">
                        <a
                            id="tab-1"
                            class="tabs__tab js-tabs__link"
                            href="#deliveries"
                            role="tab">
                        Deliveries
                        </a>
                        <a
                            id="tab-2"
                            class="tabs__tab js-tabs__link"
                            href="#finaldelivery"
                            role="tab">
                        Final Delivery Note
                        </a>
                        <a
                            id="tab-3"
                            class="tabs__tab js-tabs__link"
                            href="#price"
                            role="tab">
                        Affected by Price
                        </a>
                </div>
            </div>
        </div>
    </div>
        
    <div class="tab__container">
        <div class="wrap">
            <div class="row">
                <div class="col xs-12">
                    <section id="deliveries" class="tabs__section rte" role="tabpanel" hidden>
                        <TabularData
                            caption={'Report Delivery Charges'}
                            head={[
                            { value: 'Title' },
                            { value: 'We delivered' },
                            { value: 'We received' },
                            { value: 'Difference' },
                            { value: 'Action' },
                            { value: 'Notes' },
                        ]}
                            body={[
                                {
                                    columns: [
                                        { value: 'Auto Express' },
                                        { value: '12' },
                                        { value: '12' },
                                        { value: 'empty' },
                                        { value: 'Select an action' },
                                        { value: 'Late supply-now delivered' },
                                    ]
                },
                {
                    columns: [
                        { value: 'Auto Express' },
                        { value: '12' },
                        { value: '12' },
                        { value: 'empty' },
                        { value: 'Select an action' },
                        { value: 'Late supply-now delivered' },
                    ]
                },
                {
                    columns: [
                        { value: 'Auto Express' },
                        { value: '12' },
                        { value: '12' },
                        { value: 'empty' },
                        { value: 'Select an action' },
                        { value: 'Late supply-now delivered' },
                    ]
                }
            ]}
        />
          
            <div class="btn__container">
                    <button type=" submit" id="amount" class="btn">Save for my own reference</button>
                    <button type="submit" class="btn-white">Add additional query</button>
            </div>
        </section>
           
            <section id="finaldelivery" class="tabs__section rte" role="tabpanel">
                <p>Test 2</p>
                <p>Testing 2</p>
            </section>
            <section id="price" class="tabs__section rte" role="tabpanel">
                <p>Test 2</p>
                <p>Testing 2</p>
            </section>
            </div>
            </div>
        </div>
        </div>
    

</DefaultLayout>;


export default Deliveries;