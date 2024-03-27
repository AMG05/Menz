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
        pages={[
            { title: 'Dailies', link: '#', active:"true" },
            { title: 'Magazines', link: '#magazines' },
            { title: 'Sundays', link: '#' },
            { title: 'Part-Works', link: '#' },
            { title: 'Stickers', link: '#' },
            { title: 'Confectionary', link: '#' },
            { title: 'Vouchers', link: '#' },
            { title: '+Add to order', link: '#' },
        ]} />


<SearchandSubmit />

<div class="table__container">
    <table class="table is--link">
        <thead class="table__head">
            <tr class="table__row">
                <th class="table__th  " span="col"><p class="  table__th-text">Title</p>
                    <a class="table__sort-btn" href="#"><svg width="9" height="12" viewBox="0 0 9 12"><g id="Group_11895" data-name="Group 11895" transform="translate(-277 -2)"><path id="Polygon_1" data-name="Polygon 1" d="M4.5,0,9,5H0Z" transform="translate(286 14) rotate(180)" fill="#141446" opacity="0.8"></path><path id="Polygon_2" data-name="Polygon 2" d="M4.5,0,9,5H0Z" transform="translate(277 2)" fill="#141446" opacity="0.8"></path></g></svg>
                    </a>
                </th>
                <th class="table__th  " span="col">
                    <p class="  table__th-text">Monday</p>
                    <span class="table__th-subtitle">06/09/2023</span>
                </th>
                <th class="table__th  " span="col">
                    <p class="  table__th-text">Tuesday</p>
                    <span class="table__th-subtitle">07/09/2023</span>
                </th>
                <th class="table__th  " span="col">
                    <p class="  table__th-text">Wednesday</p>
                    <span class="table__th-subtitle">08/09/2023</span>
                </th>
                <th class="table__th  " span="col">
                    <p class="  table__th-text">Thursday</p>
                    <span class="table__th-subtitle">09/09/2023</span>
                </th>
                <th class="table__th  " span="col">
                    <p class="  table__th-text">Friday</p>
                    <span class="table__th-subtitle">10/09/2023</span>
                </th>
                <th class="table__th  " span="col">
                    <p class="  table__th-text">Saturday</p>
                    <span class="table__th-subtitle">11/09/2023</span>
                </th>
                <th class="table__th  " span="col">
                    <p class="  table__th-text">Actions</p>
                </th>
            </tr>
        </thead>
        <tbody class="table__body">
            <tr class="table__row ">
                <td class="table__td " data-th="Title">
                    <a class="table__link" href="/title-details">Express</a>
                    <span class="table__td-subtitle">Dailies</span>
                </td>
                <td class="table__td " data-th="Monday">
                    <p class="table__td-title  " data-type="">15</p>
                </td>
                <td class="table__td " data-th="Tuesday">
                    <p class="table__td-title  " data-type="">14</p>
                </td>
                <td class="table__td " data-th="Wednesday">
                    <p class="table__td-title  " data-type="">20</p>
                </td>
                <td class="table__td " data-th="Thursday">
                    <p class="table__td-title  " data-type="">14</p>
                </td>
                <td class="table__td " data-th="Friday">
                    <p class="table__td-title  " data-type="">16</p>
                </td>
                <td class="table__td " data-th="Saturday">
                    <p class="table__td-title  " data-type="">23</p>
                </td>
                <td class="table__td" data-th="Actions">
                    <div class="btn__container btn__container--table">
                        <button class="btn btn--outline btn--small js-modal-edit__btn-1 js-modal-confirmation__btn">Edit</button>
                        <button class="btn btn--outline btn--small js-modal-delete__btn-1">Delete</button>
                    </div>                      
                </td>
            </tr>
            <tr class="table__row ">
                <td class="table__td " data-th="Title">
                    <a class="table__link" href="/title-details">Financial Times</a>
                    <span class="table__td-subtitle">Dailies</span>
                </td>
                <td class="table__td " data-th="Monday">
                    <p class="table__td-title  " data-type="">15</p>
                </td>
                <td class="table__td " data-th="Tuesday">
                    <p class="table__td-title  " data-type="">14</p>
                </td>
                <td class="table__td " data-th="Wednesday">
                    <p class="table__td-title  " data-type="">20</p>
                </td>
                <td class="table__td " data-th="Thursday">
                    <p class="table__td-title  " data-type="">14</p>
                </td>
                <td class="table__td " data-th="Friday">
                    <p class="table__td-title  " data-type="">16</p>
                </td>
                <td class="table__td " data-th="Saturday">
                    <p class="table__td-title  " data-type="">23</p>
                </td>
                <td class="table__td" data-th="Actions">
                    <div class="btn__container btn__container--table">
                        <button class="btn btn--outline btn--small js-modal-edit__btn-1 js-modal-confirmation__btn" type="button">Edit</button>
                        <button class="btn btn--outline btn--small js-modal-delete__btn-1">Delete</button>
                    </div>
                    
                        <div id="modal-confirmation" aria-labelledby="modal-label" role="region" class="js-modal-confirmation modal-confirmation modal-container" data-modal-toggle="js-modal-confirmation__btn">
                            <div class="modal" role="alertdialog" aria-labelledby="modal-label" aria-describedby="modal-description">
                                <div class="modal__header">
                                    <h1 class="modal__header-title">Auto Express - <span class="modal__header-title-small">Edit my Order</span></h1>
                                        <button type="button" class="btn btn--text modal-confirmation__btn-close js-modal-confirmation__btn" aria-label="close">
                                            <span class="modal-confirmation__btn-close-icon-label">Close</span>
                                                <svg class="btn__icon--right" width="11" height="11" viewBox="0 0 12 12"><path id="Icon_material-close" data-name="Icon material-close" d="M19.5,8.709,18.291,7.5,13.5,12.291,8.709,7.5,7.5,8.709,12.291,13.5,7.5,18.291,8.709,19.5,13.5,14.709,18.291,19.5,19.5,18.291,14.709,13.5Z" transform="translate(-7.5 -7.5)" fill="#141446"></path></svg>
                                        </button>
                                        
                                </div>
                        <h2 class="modal-confirmation__subtitle" id="modal-label">Specify how many copies you want to receive each day</h2>
                        
                        <div id="reactyform"></div>
                        <DecreaseIncreaseButtons
                            max={10} />
                    </div>
                </div>                     
                </td>
            </tr>
        </tbody>
    </table>
</div>


        </Fragment>, active: 'true' },
    { title: 'Back Orders', content: <Fragment><p>Test 2</p><p>Testing 2</p></Fragment> },
    { title: 'Allocation Advice Notes', content: <Fragment><p>Test 2</p><p>Testing 2</p></Fragment> }
  ]}
/>


;


</DefaultLayout>;


export default OrderManagement;