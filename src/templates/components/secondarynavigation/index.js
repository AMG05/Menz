import { h } from 'preact';

export const SecondaryNavigation  = ({ children }) => {

    return <div class="sec-nav">
    <div class="wrap">
                <div class="row">
                    <div class="col xs-12 lg-8">
                        <nav class="secondary-navigation">
                            <ul class="secondary-navigation__list">
                                <li class="secondary-navigation__item">
                                    <a href="/Home" class="secondary-navigation__link">Home</a>
                                </li>
                                <li class="secondary-navigation__item">
                                    <a href="/Home" class="secondary-navigation__link">Deliveries</a>
                                </li>
                                <li class="secondary-navigation__item">
                                    <a href="/Home" class="secondary-navigation__link">Returns</a>
                                </li>
                                <li class="secondary-navigation__item">
                                    <a href="/Home" class="secondary-navigation__link">Order Management</a>
                                </li>
                                <li class="secondary-navigation__item">
                                    <a href="/Home" class="secondary-navigation__link">Credits</a>
                                </li>
                                <li class="secondary-navigation__item">
                                    <a href="/Home" class="secondary-navigation__link">Invoices</a>
                                </li>
                                <li class="secondary-navigation__item">
                                    <a href="/Home" class="secondary-navigation__link">Document Archive</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </div>;
    

};

export default SecondaryNavigation;