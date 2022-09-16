import React, { useState } from 'react'
import NavButtons from '../../../components/NavButtons/NavButtons'
import { validate_email } from "../../../utils/utils";
import "../onboarding.css";

const CheckboxInputTemplate = ({ inputHeader, inputKey, options, handleNavClick, customOptions= false }) => {
    const [inputValue, setInputValue] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const update_input_value = (e) => {
        console.log(e.target.checked)
        // if inside inputValue, remove it
        if (inputValue.includes(e.target.name)) {
            setInputValue(inputValue.filter((item) => item !== e.target.value));
        }
        // else add it
        else {
            setInputValue([...inputValue, e.target.value]);
        }
    }

    const next_clicked = (action) => {
        setErrorMsg(false);
        let hasError = false;
        // validate input
        if (action === "next") {
            if (inputValue.length === 0 || inputValue.length > 100) {
                setErrorMsg("Please select at least one option");
                hasError = true;
            }


        }
        if (hasError) return;

        handleNavClick(action, inputKey, inputValue);
        setInputValue([])
    }

    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>{inputHeader}</p></div>
                </div>
                     <div className="checkbox-container">
                        {options.map((option, i) => {
                            return (
                                <div key={i} className="checkbox-input">
                                    <input type="checkbox" id={option} name={option} value={option} onClick={(e) => update_input_value(e)} />
                                    <label for={option}>{option}</label>
                                </div>
                            )
                        })}
                    </div>

                    <div className="input-error-msg">
                        {errorMsg && <div className="error-msg">{errorMsg}</div>}
                    </div>

                    {customOptions && <div>
                            Add custom choices
                        </div>}
                
            </div>
            <NavButtons handleNavClick={next_clicked} />
        </>
    )
}

export default CheckboxInputTemplate;