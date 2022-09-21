import React, { useState } from 'react'
import NavButtons from '../../../components/NavButtons/NavButtons'
import { validate_email } from "../../../utils/utils";
import { DISABLE_ERRORS } from '../../../utils/constants';
import "../onboarding.css";

const SingleInputTemplate = ({ inputHeader, inputKey, handleNavClick, type = "text", subheaderText = null }) => {
    const [inputValue, setInputValue] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const update_input_value = (e) => {
        setInputValue(e.target.value);
    }

    const next_clicked = (action) => {
        setErrorMsg("");
        let hasError = false;
        // validate input
        if (action === "next") {
            if (inputValue.length === 0) {
                setErrorMsg("Please enter a value");
                hasError = true;
            }

            if (type === "email") {
                if (!validate_email(inputValue)) {
                    setErrorMsg("Please enter a valid email address");
                    hasError = true;
                }
            }
        }

        if (hasError && !DISABLE_ERRORS) return;
        let response_obj = [{
            key: inputKey,
            value: inputValue
        }]
        handleNavClick(action, response_obj);
    }

    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>{inputHeader}</p></div>
                </div>
                {subheaderText && <div className={`subheader centered weight-200`}>
                    <div className="subheader-text"><p>{subheaderText}</p></div>
                </div>}
                <div className="input-caption-container">
                    <input type={type} name={inputKey} className="input-box-text" value={inputValue} placeholder={inputHeader} onChange={(e) => update_input_value(e)} />
                </div>
                <div className="input-error-msg">
                    {errorMsg && <div className="error-msg">{errorMsg}</div>}
                </div>
            </div>
            <NavButtons key={inputKey} handleNavClick={next_clicked} />
        </>
    )
}

export default SingleInputTemplate;