import React, { useState } from 'react'
import NavButtons from '../../../components/NavButtons/NavButtons'
import { validate_email } from "../../../utils/utils";
import "../onboarding.css";

const SingleInputTemplate = ({ inputHeader, inputKey, handleNavClick, type = "text", subheaderText = null }) => {
    const [inputValue, setInputValue] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const update_input_value = (e) => {
        setInputValue(e.target.value);
    }



    const next_clicked = (action) => {
        setErrorMsg(false);
        let hasError = false;
        // validate input
        if (action === "next") {
            if (inputValue.length === 0 || inputValue.length > 100) {
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

       if (hasError) return;

        handleNavClick(action, inputKey, inputValue);
        setInputValue("")
    }

    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>{inputHeader}</p></div>
                </div>
                {subheaderText && <div className="subheader">
                    <div className="subheader-text"><p>{subheaderText}</p></div>
                </div>}
                <div className="input-caption-container">
                    <input type={type} name={inputKey} className="input-box-text" placeholder={inputHeader} onChange={(e) => update_input_value(e)} />
                </div>
                <div className="input-error-msg">
                    {errorMsg && <div className="error-msg">{errorMsg}</div>}
                </div>
            </div>
            <NavButtons handleNavClick={next_clicked} />
        </>
    )
}

export default SingleInputTemplate;