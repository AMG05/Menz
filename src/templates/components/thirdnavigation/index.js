import {h} from 'preact';

const ThirdNavigation = ({ links }) =>{
    return <div class="third-nav">
        <div class="wrap">
            <div class="row">
                <div class="col xs-12 lg-9">
                    <nav class="third-navigation" aria-label="third navigation">
                        <ul class="third-navigation__list">
                        {links.map(({ title, href }) => (
                                        <li class="third-navigation__item hover-underline-animation-two">
                                        <a href={href} class="third-navigation__link">{title}</a>
                                    </li>
                                ))}
                            </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>;
};

export default ThirdNavigation;