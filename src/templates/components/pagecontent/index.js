import { h } from 'preact';


const PageContent = () => 

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

export default PageContent;