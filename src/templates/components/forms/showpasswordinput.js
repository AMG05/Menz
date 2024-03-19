import { h } from 'preact';

const ShowPasswordInput = () =>
<div class="ShowPassword__container">
<div class="form-group">
    <label for="input" class="form-group-label form-label">Password</label>
        <div class="showpassword__group">
            <input autocomplete="off" class="input--with-password" id="input" spellcheck="false" type="password" value="this is my password"></input>
            <button class="show-password__toggle" aria-controls="input" type="button" aria-label="Show password">Show</button>
            <span class="visuallyhidden" aria-live="polite">"Your password is hidden"</span>
            <div data-icon="true"></div>
        </div>
    
</div>
</div>;

export default ShowPasswordInput;