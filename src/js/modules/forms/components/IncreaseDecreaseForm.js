import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { route } from 'preact-router';


const DecreaseIncreaseButtons = ( {max}) => {

    const [inputValues, setInputValues]= useState({
        MondayInput: 0,
        TuesdayInput: 0,
    });

    const [successMessage, setSuccessMessage] = useState(null);


    const increaseNumber = (inputName) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [inputName]: prevValues[inputName] +1,
        }));
    };
  

    const decreaseNumber = (inputName) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [inputName]: prevValues[inputName] -1,
        }));
    };
   

    const handleChange = (inputName, value) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [inputName]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputValues),
            });

            if (response.ok) {
                setSuccessMessage('Form submitted successfully!');
            } else {
                console.error('Couldn\'t update database');
            }
        } catch (error){
            console.error('Error occured', error);
        }
    };
    

    return (
      <div>
        {successMessage ? (
            <div class="success-message">{successMessage}</div>
        ) : (
        <form class="modal__form modal-confirmation__form" id="validatingForm" onSubmit={handleSubmit}>
            <p id="modal-description">Monday</p>
                <div class="modal-confirmation__row">
                    <div class="form-group">
                        <label for="mondayInput">Monday</label>
                            <div class="form-group-items">
                                <button
                                    class="incremental-btn"
                                    onClick={() => increaseNumber('MondayInput')} />
                                <input
                                    id="mondayInput"
                                    type="text"
                                    class="form-input"
                                    onChange={(event) => handleChange('MondayInput', parseInt(event.target.value, 10) || 0)}
                                    value={inputValues.MondayInput || ''} />
                                <button
                                 class="decrease-btn" 
                                 onClick={() => decreaseNumber('MondayInput')} />
                            </div>
                            <label for="tuesdayInput">Tuesday</label>
                            <div class="form-group-items">
                                <button
                                    class="incremental-btn"
                                    onClick={() => increaseNumber('TuesdayInput')} />
                                <input
                                    id="tuesdayInput"
                                    type="text"
                                    class="form-input"
                                    onChange={(event) => handleChange('TuesdayInput', parseInt(event.target.value, 10)|| 0 )}
                                    value={inputValues.TuesdayInput || ''} />
                                <button
                                    class="decrease-btn"
                                    onClick={() => decreaseNumber('TuesdayInput')} />
                            </div>
                    </div>
                    <button type="submit" class="modal-confirmation__confirm">Continue</button>
                    <button type="button" class="modal-confirmation__cancel js-modal-confirmation__btn">Cancel</button>
                </div>
        </form>
         )}
    </div>
   
    
    );
};

export default DecreaseIncreaseButtons;


