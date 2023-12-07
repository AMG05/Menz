import { h } from 'preact';
import Navigation from '../navigation';
import ExclusiveToggles from '../exclusivetoggles';
import SearchBar from '../searchbar';
import Logo from '../logo';

const Header = ({ children, title }) => <header class="header header--home">
     { children }
        <div class="wrap">
            <div class="row">
                <div class="col xs-12">
                    <div class="header__inner">
                        <Logo />
                        <SearchBar />
                <ExclusiveToggles />
              <Navigation
                title={["Notifications", "Contact Us"]}/>
            </div>
        </div>
    </div>
</div>
</header>;

export default Header;