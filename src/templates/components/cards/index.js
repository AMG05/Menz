import {h} from 'preact';

const AdminCards = () => <div class="card__container">
    <div class="wrap">
        <div class="row">
            <div class="col xs-12 md-3">
                <div class="card">
                    <h2 class="card_title">Number of Users</h2>
                    <h3 class="card-data">14,169</h3>
                </div>
            </div>
            <div class="col xs-12 md-3">
            <div class="card">
                    <h2 class="card_title">Number of Groups</h2>
                    <h3 class="card-data">102</h3>
                </div>
            </div>
            <div class="col xs-12 md-3">
            <div class="card">
                    <h2 class="card_title">New Users today</h2>
                    <h3 class="card-data">3</h3>
                </div>
            </div>
            <div class="col xs-12 md-3">
            <div class="card">
                    <h2 class="card_title">Active Users Today</h2>
                    <h3 class="card-data">5,432</h3>
                </div>
            </div>
        </div>
    </div>
</div>;



export default AdminCards;