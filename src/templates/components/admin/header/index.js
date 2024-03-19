import { h } from 'preact';
import Logo from '../../logo';

const Header = ({ children, title }) => <header class="header header--home">
     { children }
        <div class="wrap">
            <div class="row">
                <div class="col xs-12">
                    <div class="header__inner">
                        <Logo />
            </div>
        </div>
    </div>
</div>
</header>;

export default Header;