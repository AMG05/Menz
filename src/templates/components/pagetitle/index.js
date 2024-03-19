import { h } from 'preact';

export const PageTitle = ({ title, children }) => {

    return <header class="page-header">
        <div class="wrap">
                    <h1 class="page-header__heading">{title}</h1>
                    <p class="page-header__body">{children}</p>
        </div>
    </header>;
};

export default PageTitle;