import { h } from 'preact';
import PrimaryButton from '../forms/primarybutton';

const SearchandSubmit = () => <form class="search__form push-bottom" method="#" action="#" role="search">
    <div class="search">
        <label class="label" for="navSearch">Search</label>
        <div class="search__container">
            <div class="search__input-container">
                <input class="search__input" type="search" id="navSearch" name="navSearch"></input>
            </div>
            <button class="btn btn--primary" type="submit">Submit</button>
        </div>
    </div>
</form>;


export default SearchandSubmit;