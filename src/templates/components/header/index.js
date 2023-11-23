import { h } from 'preact';
import Navigation from '../navigation';
import ExclusiveToggles from '../exclusivetoggles';
import SearchBar from '../searchbar';

const Header = ({ children }) => <header class="header header--home">
     { children }
        <div class="wrap">
            <div class="row">
                <div class="col xs-12">
                    <div class="header__inner">
                        <a href="/" class="header__link" aria-label="Go to the Menzies homepage">
                            <img src="/static/img/menzies.svg" alt="Menzies - home" />
                        </a>
                        <SearchBar />
                <ExclusiveToggles />
              <Navigation />
            </div>
        </div>
    </div>
</div>
</header>;

export default Header;