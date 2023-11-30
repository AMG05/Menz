import { h } from 'preact';

const PrimaryNavigation = () =>
<nav id="header-navigation" class="header-navigation" aria-label="Abridged navigation">
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <a href="/notifications" class="navigation__link" target>Notifications</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/News" class="navigation__link" target>Contact Us</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/account" class="navigation__link navigation__link-icon" target>My account</a>
                        </li>
                    </ul>
                </nav>;

export default PrimaryNavigation;