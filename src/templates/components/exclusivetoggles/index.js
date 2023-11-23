import { h } from 'preact';

const ExclusiveToggles = () => 

<div class="exclusive-toggles__container">
    <div class="exclusive-search__container ">
        <button class="exclusive-search__btn js-exclusive-search__btn" aria-label="Show or hide site search">
            <svg class="exclusive-search__btn-icon" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#333333"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg> 
        </button>
    <div class="exclusive-search js-toggle" id="exclusive-search" data-toggle="js-exclusive-search__btn">
        <form class="exclusive-search__form" action="#">
            <label class="exclusive-search__label" for="q">Input your search term</label>
            <input class="exclusive-search__input" type="search" id="q" name="q" />
            <button class="exclusive-search__submit">search</button>
        </form>
    </div>
</div>
                
<nav class="exclusive-nav__container js-exclusive-nav" aria-label="Primary navigation">
    <button class="exclusive-nav__btn js-exclusive-nav__toggle" aria-label="Show or hide navigation menu" aria-controls="exclusive-nav" aria-expanded="false">
        <svg focusable="false" class="expandable-nav__btn-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
        menu
    </button>
    <div id="exclusive-nav" class="exclusive-nav__display-wrap js-toggle" data-toggle="js-exclusive-nav__toggle">
        <div class="exclusive-nav__container">
            <div class="wrap">
                <div class="row">
                    <div class="col">
                         <button type="button" class="exclusive-nav__close js-exclusive-nav__toggle" aria-label="close">
                             <svg class="exclusive-nav__close-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17.999 18">
                                <g data-name="Group 11561" fill="#333">
                                    <path data-name="Path 12311" d="M16.687 18-.001 1.312 1.31 0l16.688 16.689Z"></path>
                                    <path data-name="Path 12313" d="M18 1.311 1.311 18 0 16.689 16.688 0Z"></path>
                                </g>
                            </svg><span class="exclusive-nav__close-icon-label">Close</span></button>
                    </div>
                    <div class="col xs-12 sm-8">
                        <nav>
                            <ul class="exclusive-nav__list">
                                <li class="exclusive-nav__item">
                                    <a class="exclusive-nav__link" href="#">Item 1</a>
                                </li>
                                <li class="exclusive-nav__item">
                                    <a class="exclusive-nav__link is--active" href="#" aria-current="page">Item 2</a>
                                </li>
                                <li class="exclusive-nav__item">
                                    <a class="exclusive-nav__link" href="#">Item 3</a>
                                </li>
                                <li class="exclusive-nav__item">
                                    <a class="exclusive-nav__link" href="#">Item 4</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</div>


export default ExclusiveToggles;