import {h} from 'preact';

const ThirdNavigation = ({ pages }) =>{
    return <nav class="nav--page-subnav" aria-label="Order management sub navigation">
                    <div class="wrap">
                        <ul class="nav__list nav__list--page-subnav">
                            {pages.map((page) => {
                            return  <li class="nav__list-item hover-underline-animation-two">
                            <a href={page.link} class={"nav__link nav__link--site " + ((page.active) ? "is.active": "")}>
                                {page.title}
                                </a>
                        </li>;
                        })}
                    </ul>
                 </div>
            </nav>      
      ;
};

export default ThirdNavigation;