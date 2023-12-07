import { h } from 'preact';


export const SecondaryNavigation  = ({ links }) =>{

    return <div class="sec-nav">
    <div class="wrap">
                <div class="row">
                    <div class="col xs-12 lg-8">
                        <nav class="secondary-navigation">
                            <ul class="secondary-navigation__list">
                                {links.map(({ title, href }) => (
                                        <li class="secondary-navigation__item">
                                        <a href={href} class="secondary-navigation__link">{title}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </div>;
    

};

export default SecondaryNavigation;