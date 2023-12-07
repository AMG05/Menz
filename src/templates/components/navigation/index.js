import { h } from 'preact';

const PrimaryNavigation = ({ title}) =>
<nav id="header-navigation" class="header-navigation" aria-label="Abridged navigation">
                    <ul class="navigation__list">
                        {title.map(title => (
                            <li class="navigation__item">
                            <a href="/notifications" class="navigation__link" target>{title}</a>
                            </li>
                        ))}
                        <li class="navigation__item">
                            <a href="/account" class="navigation__link navigation__link-icon" target>My account</a>
                        </li>
                    </ul>
                </nav>;

export default PrimaryNavigation;