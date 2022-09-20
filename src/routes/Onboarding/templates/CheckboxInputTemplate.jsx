import React, { useState } from 'react'
import NavButtons from '../../../components/NavButtons/NavButtons'
import { remove_or_add_from_array } from '../../../utils/utils';
import { DISABLE_ERRORS } from '../../../utils/constants';

import "../onboarding.css";

const CheckboxInputTemplate = ({ inputHeader, inputKey, options,  progressBarText, progressBarFill, handleNavClick, customOptions = false }) => {
    const [inputValue, setInputValue] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const update_input_value = (e) => {
        setInputValue(remove_or_add_from_array(inputValue, e.target.value));
    }

    const next_clicked = (action) => {
        setErrorMsg(false);
        let hasError = false;
        // validate input
        if (action === "next") {
            if (inputValue.length === 0) {
                setErrorMsg("Please select at least one option");
                hasError = true;
            }
        }
        if (hasError && !DISABLE_ERRORS) return;

        let response_obj = [{
            key: inputKey,
            value: inputValue
        }]

        handleNavClick(action, response_obj);
        setInputValue([])
    }

    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>{inputHeader}</p></div>
                </div>
                <div className="checkbox-container-wrapper">
                    <div className="checkbox-container">
                        {options.map((option, i) => {
                            return (
                                <div key={i} className="checkbox-input">
                                    <div className="checkbox-input-wrapper">
                                        <input type="checkbox" id={option} name={option} value={option} onClick={(e) => update_input_value(e)} />
                                        <label htmlFor={option}>{option}</label>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="input-error-msg">
                    {errorMsg && <div className="error-msg">{errorMsg}</div>}
                </div>

                {customOptions && <div className="add-custom-option">
                    + add another industry
                </div>}

            </div>
            <NavButtons handleNavClick={next_clicked} />
        </>
    )
}

export default CheckboxInputTemplate;