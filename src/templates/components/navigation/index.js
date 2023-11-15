import { h } from 'preact';

const PrimaryNavigation = ({children}) =>
<div class="wrap">
        <div class="row">
            <div class="col">
                <div class="header__nav-container">
                    <nav class="header-navigation">
                        <ul class="navigation__list">
                            <li class="navigation__item">
                                <a class="navigation__link" href="/Customer">Customers</a>
                            </li>
                            <li class="navigation__item">
                            <a class="navigation__link" href="/News">News</a>
                            </li>
                            <li class="navigation__item">
                                <a class="navigation__link" href="/Contact Us">Contact Us</a></li>
                            <li class="navigation__item">
                            <a class="navigation__link" href="/News">News</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>;

export default PrimaryNavigation;