import { h } from 'preact';



const Modal = () => {
    return ( <div class="right">
    <button class="table-data__btn-blue modal-confirmation__btn js-modal-confirmation__btn" type="button">Returns not collected today</button>
    <div class="modal-background">
    <div id="modal-confirmation" aria-labelledby="modal-label" role="region" class="js-modal-confirmation modal-confirmation modal-container" data-modal-toggle="js-modal-confirmation__btn">
    <div class="modal" role="alertdialog" aria-labelledby="modal-label" aria-describedby="modal-description">
        <div class="modal__header">
            <div class="wrap">
                <div class="row">
                    <div class="col xs-12">
                <h1>Returns not collected</h1>
                <button class="btn">Close</button>
                    <button type="button" class="exclusive-nav__close js-modal-confirmation__btn" aria-label="close">
                        <svg class="exclusive-nav__close-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17.999 18">
                        <g data-name="Group 11561" fill="#333">
                        <path data-name="Path 12311" d="M16.687 18-.001 1.312 1.31 0l16.688 16.689Z"></path>
                        <path data-name="Path 12313" d="M18 1.311 1.311 18 0 16.689 16.688 0Z"></path>
                        </g>
                        </svg><span class="exclusive-nav__close-icon-label">Close</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
        <form class="modal__form modal-confirmation__form" action="#">
            <p id="modal description">We apologize for any inconvenience caused by uncollected items.</p>
            <p>Please select either 1 day or more than 1 day from the option below.</p>
            <input type="radio">1 day</input>
            <input type="radio">More than 1 day</input>
            <div class="modal-confirmation__row">
                <button type="submit" class="modal-confirmation__confirm">Submit request for collectiom</button>
                <button type="submit" class="modal-confirmation__cancel js-modal-confirmation__btn">Cancel</button>
            </div>
        </form>
    </div>
</div>
</div>
</div>  );
};
 
export default Modal;