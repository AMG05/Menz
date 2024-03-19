import { h} from 'preact';

const VanAlert = () => <div class="alert__container">
<div class="wrap">
        <div class="row">
            <div class="col xs-12">
                <div class="alert__inner">
                    <div class="alert-info">
                        <p>Your delivery was dispatched and is currently on its way to you</p>
                        <p>Your estimated delivery time is: 6.30am</p>
                    </div>
                <div class="alert-button">
                    <button class="btn-yellow">Track my delivery on a map</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>;

export default VanAlert;