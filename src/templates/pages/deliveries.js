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
import Input from '@templates/components/forms/input';
import FormSelect from '@templates/components/forms/formselect';

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

{/* 
    <Tabs
        tabsList={[
            { title: 'Deliveries', content:
            <Fragment>
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
                            { value: <PrimaryButton /> },
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


</Fragment> },
            { title: 'Final Delivery Note', content: <Fragment>
            <TabularData
                caption={'Report Delivery Charges'}
                head={[
             { value: 'Date' },
             { value: 'Download' },
             
         ]}
                body={[
                 {
                     columns: [
                         { value: 'Sunday 19/07/2023' },
                         { value: 'Download PDF' },
                         
                     ]
 },
 {
     columns: [
         { value: 'Auto Express' },
         { value: '12' },
         
     ]
 },
 {
     columns: [
         { value: 'Auto Express' },
         { value: '12' },
        
     ]
 }
]}
/>

</Fragment> },
            { title: 'Affected by Price', content: <Fragment>
            <TabularData
                caption={'Report Delivery Charges'}
                head={[
             { value: 'Title' },
             { value: 'Old Price' },
             { value: 'New Price' },
         ]}
                body={[
                 {
                     columns: [
                         { value: 'Auto Express' },
                         { value: '6.99' },
                         { value: '5.99' },
                         
                     ]
 },
 {
     columns: [
         { value: 'Auto Express' },
         { value: '12' },
         { value: '12' },
        
     ]
 },
 {
     columns: [
         { value: 'Auto Express' },
         { value: '12' },
         { value: '12' },
        
     ]
 }
]}
/>

</Fragment>, active: 'true' },
        ]} /> */}


<div class="tabs js-tabs">
        <div class="wrap">
            <div class="row">
                <div class="tabs__tabslist" role="tablist">
                        <a
                            id="tab-1"
                            class="tabs__tab js-tabs__link"
                            href="#panel-0"
                            role="tab">
                        Deliveries
                        </a>
                        <a
                            id="tab-2"
                            class="tabs__tab js-tabs__link"
                            href="#panel-1"
                            role="tab">
                        Final Delivery Note
                        </a>
                        <a
                            id="tab-3"
                            class="tabs__tab js-tabs__link"
                            href="#panel-2"
                            role="tab">
                        Affected by Price
                        </a>
                </div>
            </div>
        </div>

<div class="data__container">
    <div class="wrap">
        <div class="row">
            <div class="col xs-12 md-3">
                <DataDropdown />
                </div>
                <div class="col xs-12 md-9">
                <DataDetail />
                </div>
        </div>
        <div class="row">
            <div class="col xs-12 md-12">
                <SearchandFilter />
                </div>
                
        </div>
    </div>
    </div>    
<section id="panel-0" class="tabs__tabpanel" role="tabpanel" hidden>
    <div class="wrap">
        <div class="row">
            <div class="col xs-12">
                        <TabularData
                            caption={'Report Delivery Charges'}
                            head={[
                            { value: 'Title' },
                            { value: 'We delivered' },
                            { value: 'You received' },
                            { value: 'Difference' },
                            { value: 'Action' },
                            { value: 'Notes' },
                        ]}
                            body={[
                                {
                                    columns: [
                                        { value: 'Auto Express' },
                                        { value: '12' },
                                        { value: <Input
                                            type="text"
                                            className="table-input"
                                            id="youreceived" /> },
                                        { value: '' },
                                        { value: <FormSelect /> },
                                        { value: 'Late supply-now delivered' },
                                    ]
                },
                {
                    columns: [
                        { value: 'Auto Express' },
                        { value: '12' },
                        { value: <Input 
                            type="text"
                            className="table-input"
                            id="youreceived"/> },
                        { value: '' },
                        { value: <FormSelect /> },
                        { value: 'Late supply-now delivered' },
                    ]
                },
                {
                    columns: [
                        { value: 'Auto Express' },
                        { value: '12' },
                        { value: <Input 
                            type="text"
                            className="table-input"
                            id="youreceived"/> },
                        { value: '' },
                        { value: <FormSelect /> },
                        { value: 'Late supply-now delivered' },
                    ]
                }
            ]}
        />
                <div class="btn__container">
                        <button type=" submit" id="amount" class="btn">Save for my own reference</button>
                        <button type="submit" class="btn-white">Add additional query</button>
                </div>
            </div>
        </div>
    </div>
</section>
   
        
            <section id="panel-1" class="tabs__section rte" role="tabpanel">
                <p>Test 2</p>
                <p>Testing 2</p>
            </section>
            <section id="panel-2" class="tabs__section rte" role="tabpanel">
                <p>Test 2</p>
                <p>Testing 2</p>
            </section>
        </div>
         
</DefaultLayout>;


export default Deliveries;