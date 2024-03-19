import {h} from 'preact';

const LoginAdmin = ({title, children}) => {
    return <div class="admin-login__container">
                <div class="wrap">
                    <div class="row">
                        <div class="col xs-12 md-4">
                            <h1 class="title">{title}</h1>
                                <div class="title__body">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
};


export default LoginAdmin;