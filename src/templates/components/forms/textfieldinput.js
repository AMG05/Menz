import { h } from 'preact';

const Input = ({ inputName, label, subLabel, ariaLabel, value, error, disabled, data, required=false }) => {
  
  return <div class="input input--text-field">
    {label && <label aria-label={ariaLabel} class="input__label" for={((inputName) ? inputName : "")}>{label} {required && <span class="input__required">(required)</span>}
      {subLabel && <span class="input__subLabel">{subLabel}</span>}
      {error && <span class="error" data-valmsg-for={inputName} id={inputName + "-error-message"}>{error}</span>}
    </label>}

    <input disabled={(disabled === 'true')} id={(inputName) ? inputName : ""} name={inputName ? inputName : ""} type="text" class={"input__input" +  ((error) ? " error" : "")} aria-invalid={(error) ? "true" : null} aria-describedby={(error) ? inputName + "-error-message" : null} value={value} {...data}/>
  </div>
  

};



export default Input;