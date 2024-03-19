import { h } from 'preact';
import Logo from '@templates/components/logo';


const UngatedFooter  = () => <footer class="footer footer--ungated">
            <div class="wrap">
                <div class="footer__sections">
                    <div class="col xs-12 md-3">
                        <h2 class="footer__title-alt">Sitemap</h2>
                             <ul class="footer-nav">
                                    <li class="footer-nav__item">
                                        <a href="/adminhome" class="footer-nav__link">Home</a>
                                    </li>
                                    <li class="footer-nav__item">
                                        <a href="/Deliveries" class="footer-nav__link">Customers</a>
                                    </li>
                                    <li class="footer-nav__item">
                                        <a href="/Returns" class="footer-nav__link">News</a>
                                    </li>
                                </ul>
                    </div>
                    <div class="col xs-12 md-3">
                        <h2 class="footer__title-alt">About this site</h2>
                             <ul class="footer-nav">
                                    <li class="footer-nav__item">
                                        <a href="/adminhome" class="footer-nav__link">Contact Us</a>
                                    </li>
                                    <li class="footer-nav__item">
                                        <a href="/Deliveries" class="footer-nav__link">Terms and conditions</a>
                                    </li>
                                    <li class="footer-nav__item">
                                        <a href="/Returns" class="footer-nav__link">Privacy Policy</a>
                                    </li>
                                </ul>
                    </div>
                    <div class="col xs-12 md-3">
                        <h2 class="footer__title-alt">Customer site</h2>
                             <ul class="footer-nav">
                                    <li class="footer-nav__item">
                                        <a href="/adminhome" class="footer-nav__link">Login</a>
                                    </li>
                                    <li class="footer-nav__item">
                                        <a href="/Deliveries" class="footer-nav__link">Register</a>
                                    </li>
                                </ul>
                    </div>
            </div>
            <div class="footer__legal">
                    <div class="grid">
                        <div class="col xs-6 md-9"><h3>© Copyright Menzies Distribution</h3></div>
                        <div class="col xs-6 md-3"><img width="140" height="100" src="/static/img/menzies-white.svg" /></div>
                    </div>
                </div>
        </div>
    </footer>;
    
export default UngatedFooter;
