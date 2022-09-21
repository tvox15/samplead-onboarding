import React, { useState } from 'react'
import { FormInput } from '../../../components/Form/Form';
import NavButtons from '../../../components/NavButtons/NavButtons'
import { DISABLE_ERRORS } from '../../../utils/constants';
import "../onboarding.css";



const MultipleInputTemplate = ({ inputHeader, inputKey,  handleNavClick, addText, placeholder, input_limit,  subheaderText = null }) => {
    const [inputValue, setInputValue] = useState(["", ""]);
    const [errorMsg, setErrorMsg] = useState("");

    const update_input_value = (e, index) => {
        let new_input_value = [...inputValue];
        new_input_value[index] = e;
        setInputValue(new_input_value);
    }

    const next_clicked = (action) => {
        setErrorMsg(false);
        let hasError = false;
        // validate input
        console.log(inputValue, inputValue.every((val) => val === ""))
        if (action === "next") {
            if (inputValue.length === 0 || inputValue.every((val) => val === "")) {
                setErrorMsg("Please enter at least 1 value");
                hasError = true;
            }
        }

       if (hasError && !DISABLE_ERRORS) return;
        let response_obj = [{
            key: inputKey,
            value: inputValue
        }]
        console.log(response_obj)
        handleNavClick(action, response_obj);
        setInputValue("")
    }

    const addExtraField = () => {
        setErrorMsg(false);
        if (inputValue.length < input_limit) {
            setInputValue([...inputValue, ""]);
        }
    }



    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>{inputHeader}</p></div>
                </div>
                {subheaderText && <div className="subheader margin-y-low centered fit-to-width">
                    <div className="subheader-text"><p>{subheaderText}</p></div>
                </div>}
                {inputValue.map((value, index) => {
                    return (
                        <div className="centered"  key={index}>
                            <div className="input-bar centered">
                                <FormInput type="text" inputValue={inputValue[index]} inputName={inputKey} placeholder={placeholder} onChange={(e) => update_input_value(e, index)} />
                            </div>
                        </div>)
                })}

                {inputValue.length < input_limit &&
                    <div className="add-custom-option"  >
                        <p className="add-custom-option-text link" onClick={() => addExtraField()}>{addText}</p>
                    </div>
                }

                <div className="input-error-msg">
                    {errorMsg && <div className="error-msg">{errorMsg}</div>}
                </div>
            </div>
            <NavButtons handleNavClick={next_clicked} />
        </>
    )
}

export default MultipleInputTemplate;