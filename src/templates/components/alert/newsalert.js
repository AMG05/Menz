import { h } from 'preact';

const NewsAlert = () => <div class="newsalert__container">
    <div class="wrap">
        <div class="row">
            <div class="col xs-12">
                <div class="newsalert__inner">
                    <div class="newsalert-info">
                        <p>News Item has been successfully deleted</p>
                    </div>
                    <div class="newsalert__button">
                        <button class="button-delete">
                            <svg class="button-delete-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17.999 18">
                            <g data-name="Group 11561" fill="#333">
                            <path data-name="Path 12311" d="M16.687 18-.001 1.312 1.31 0l16.688 16.689Z"></path>
                            <path data-name="Path 12313" d="M18 1.311 1.311 18 0 16.689 16.688 0Z"></path>
                            </g>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;


export default NewsAlert;