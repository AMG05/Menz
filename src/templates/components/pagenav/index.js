import {h} from 'preact';

const PageNav = ({pages}) =>

<nav class="nav--page" aria-label="Deliveries navigation">
    <div class="wrap">
        <ul class="nav__list nav__list--page">
            {pages.map((page) => {
                return <li class="nav__list-item">
                <a href={page.link}class={"nav__link nav__link--page" + ((page.active) ? " is--active" : "")}>
                    {page.title}
                </a>
            </li>
            })}
                </ul>
    </div>
</nav>

export default PageNav;

