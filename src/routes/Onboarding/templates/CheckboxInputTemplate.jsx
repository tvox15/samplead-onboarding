import React, { useState } from 'react'
import NavButtons from '../../../components/NavButtons/NavButtons'
import { remove_or_add_from_array } from '../../../utils/utils';
import { DISABLE_ERRORS } from '../../../utils/constants';

import "../onboarding.css";
import { FormInput } from '../../../components/Form/Form';

const CheckboxInputTemplate = ({ inputHeader, inputKey, options, checkboxWidth, columns, handleNavClick, customOptions = false, customInputLimit = 0, placeholder = "" }) => {
    const [inputValue, setInputValue] = useState([]);
    const [customInputs, setCustomInputs] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const column_class = columns ? `checkbox-col-${columns}` : "";
    const checkbox_width = checkboxWidth ? `checkbox-w-${checkboxWidth}` : "";

    const update_input_value = (e) => {
        setInputValue(remove_or_add_from_array(inputValue, e.target.value));
    }

    const next_clicked = (action) => {
        setErrorMsg(false);
        let hasError = false;
        // validate input
        if (action === "next") {
            if ([...inputValue, ...customInputs].length === 0) {
                setErrorMsg("Please select at least one option");
                hasError = true;
            }
        }
        if (hasError && !DISABLE_ERRORS) return;

        let response_obj = [{
            key: inputKey,
            value: [...inputValue, ...customInputs].filter(item => item !== "" && item !== null)
        }]
        console.log('response_obj', response_obj);

        handleNavClick(action, response_obj);
        setInputValue([])
    }

    const addExtraField = () => {
        setErrorMsg(false);
        if (customInputs.length < customInputLimit) {
            setCustomInputs([...customInputs, ""]);
        }
    }

    const update_custom_input = (e, index) => {
        let new_input_value = [...customInputs];
        new_input_value[index] = e;
        setCustomInputs(new_input_value);
    }

    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>{inputHeader}</p></div>
                </div>
                <div className="checkbox-container-wrapper">
                    <div className={`checkbox-container  ${checkbox_width}`}>
                        {options.map((option, i) => {
                            return (
                                <div key={i} className={`checkbox-input ${column_class}`}>
                                    <div className="checkbox-input-wrapper">
                                        <input type="checkbox" id={option} name={option} value={option} onClick={(e) => update_input_value(e)} 
                                            checked={inputValue.includes(option)}
                                        />
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

                {customOptions && <div className="add-custom-option-container">
                    {customInputs.length >= 1 && customInputs.map((value, index) => {
                        return (
                            <div className="centered" key={index}>
                                <div className="input-bar centered">
                                    <FormInput type="text" inputValue={customInputs[index]} inputName={inputKey} placeholder={placeholder} onChange={(e) => update_custom_input(e, index)} />
                                </div>
                            </div>)
                    })}

                    {customInputs.length < customInputLimit &&
                        <div className="add-custom-option" onClick={() => addExtraField()}>
                            + add another industry
                        </div>
                    }
                </div>}
            </div>
            <NavButtons handleNavClick={next_clicked} />
        </>
    )
}

export default CheckboxInputTemplate;