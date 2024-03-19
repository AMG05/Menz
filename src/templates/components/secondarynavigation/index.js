import { h } from 'preact';


export const SecondaryNavigation  = ({ pages }) =>

     <nav class="sec-nav" aria-label="Site navigation">
                    <div class="wrap">
                            <ul class="sec-nav__list">
                                {pages.map((page) => {
                                    return <li class="sec-nav__list-item hover-underline-animation">
                                    <a href={page.link} class={"nav__link sec-nav__link" + ((page.active) ? " is--active" : "")}>
                                    {page.title}
                                    </a>
                                </li>
                                })}
                            </ul>
                    </div>
            </nav>;
    



export default SecondaryNavigation;