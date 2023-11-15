import { h } from 'preact';

const Footer = ({ children }) => 
<footer class="footer">
    <div class="footer__top">
        <div class="wrap">
            <div class="grid">
                <div class="col xs-12 md-3">
                    <h3 class="footer__nav-title">Sitemap</h3>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list">
                            <li class="footer__nav-item">
                                <a href="/Home" class="footer__nav-link">Home</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Deliveries" class="footer__nav-link">Deliveries</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Returns" class="footer__nav-link">Returns</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Orders" class="footer__nav-link">Orders</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Credits" class="footer__nav-link">Credits</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Invoices" class="footer__nav-link">Invoices</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Home" class="footer__nav-link">Document archive</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col xs-12 md-3">
                    <h3 class="footer__nav-title">Updates</h3>
                    <nav class="footer__nav">
                        <ul>
                            <li class="footer__nav-item">
                                <a href="/Notifications" class="footer__nav-link">Notifications Centre</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/News" class="footer__nav-link">News</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Offers" class="footer__nav-link">Offers</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col xs-12 md-3">
                <h3 class="footer__nav-title">About this site</h3>
                    <nav class="footer__nav">
                        <ul>
                            <li class="footer__nav-item">
                                <a href="/About Us" class="footer__nav-link">About Us</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Contact us" class="footer__nav-link">Contact Us</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Terms and conditions" class="footer__nav-link">Terms and Conditions</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Privacy Policy" class="footer__nav-link">Privacy Policy</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col xs-12 md-3">
                    <h3 class="footer__nav-title">Help</h3>
                    <nav class="footer__nav">
                        <ul>
                            <li class="footer__nav-item">
                                <a href="/Home" class="footer__nav-link">FAQ</a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="/Home" class="footer__nav-link">Industry help</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
<div class="footer__bottom">
    <div class="wrap">
        <div class="grid">
            <div class="col xs-6 md-9"><h3>© Copyright Menzies Distribution</h3></div>
            <div class="col xs-6 md-3"><img width="140" height="100" src="src\img\menzies-white.svg"></img></div>
        </div>
    </div>
</div></footer>;

export default Footer;