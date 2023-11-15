import { h } from 'preact';

export const PageTitle = ({ title, children }) => {

    return <div class="wrap title-page__container">
        <div class="row">
            <div class="col xs-12 lg-6 ">
                    <h1 class="title">{title}</h1>
                    <div class="title__body">{children}</div>
            </div>
        </div>
    </div>;
};

export default PageTitle;