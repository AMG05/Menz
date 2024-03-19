import { h } from 'preact';

const Footer = ({ children }) => <footer class="footer">
        <div class="wrap">
            <div class="footer__sections">
                <div class="col xs-12 md-3">
                    <h2 class="footer__title">Sitemap</h2>
                        <ul class="footer-nav">
                            <li class="footer-nav__item">
                                <a href="/Home" class="footer-nav__link">Home</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Deliveries" class="footer-nav__link">Deliveries</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Returns" class="footer-nav__link">Returns</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Orders" class="footer-nav__link">Orders</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Credits" class="footer-nav__link">Credits</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Invoices" class="footer-nav__link">Invoices</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Home" class="footer-nav__link">Document archive</a>
                            </li>
                        </ul>
                </div>
                <div class="col xs-12 md-3">
                    <h2 class="footer__title">Updates</h2>
                        <ul class="footer-nav">
                            <li class="footer-nav__item">
                                <a href="/Notifications" class="footer-nav__link">Notifications Centre</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/News" class="footer-nav__link">News</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Offers" class="footer-nav__link">Offers</a>
                            </li>
                        </ul> 
                </div>
                <div class="col xs-12 md-3">
                    <h2 class="footer__title">About this site</h2>
                        <ul class="footer-nav">
                            <li class="footer-nav__item">
                                <a href="/About Us" class="footer-nav__link">About Us</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Contact us" class="footer-nav__link">Contact Us</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Terms and conditions" class="footer-nav__link">Terms and Conditions</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Privacy Policy" class="footer-nav__link">Privacy Policy</a>
                            </li>
                        </ul>
                </div>
                <div class="col xs-12 md-3">
                    <h3 class="footer__title">Help</h3>
                        <ul class="footer-nav">
                            <li class="footer-nav__item">
                                <a href="/Home" class="footer-nav__link">FAQ</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="/Home" class="footer-nav__link">Industry help</a>
                            </li>
                        </ul>
                </div>
            </div>
<div class="footer__legal">
        <div class="grid">
            <div class="col xs-6 md-9"><h3>© Copyright Menzies Distribution</h3></div>
            <div class="col xs-6 md-3"><img width="140" height="100" src="src\img\menzies-white.svg"></img></div>
        </div>
    </div>
</div>
</footer>;

export default Footer;