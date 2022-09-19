import React, { useState } from 'react'
import { FormInput } from '../../components/Form/Form';
import NavButtons from '../../components/NavButtons/NavButtons'
import RadioButton from '../../components/RadioButton';
import { DISABLE_ERRORS } from '../../utils/constants';

import "../onboarding.css";



const TargetTitlesPage = ({ handleNavClick,  progressBarText, progressBarFill }) => {

    const max_titles = 3;

    const [inputValue, setInputValue] = useState(["", ""]);
    const [excludedTitles, setExcludedTitles] = useState([""]);
    const [excludedTitlesDisabled, setExcludedTitlesDisabled] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    const update_input_value = (e, index, value, setFn) => {
        let new_arr = [...value];
        new_arr[index] = e;
        setFn(new_arr);
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
            key: "target_titles",
            value: inputValue
        },
        {
            key: "excluded_titles",
            value: excludedTitles
        }];
        console.log(response_obj)
        handleNavClick(action, response_obj);
        setInputValue("")
    }

    const addExtraField = (value, setFn) => {
        setErrorMsg(false);
        if (value.length < max_titles) {
            setFn([...value, ""]);
        }

    }



    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>Target Titles</p></div>
                </div>
                <div className="subheader margin-y-low centered">
                    <div className="subheader-text"><p>For example: VP of Technology</p></div>
                </div>
                {inputValue.map((value, index) => {
                    return (
                        <div className="centered" key={index}>
                            <div className="input-bar centered">
                                <FormInput
                                    type="text"
                                    inputValue={inputValue[index]}
                                    inputName="target_titles"
                                    placeholder="Title"
                                    onChange={(e) => update_input_value(e, index, inputValue, setInputValue)}
                                />
                            </div>
                        </div>)
                })}
                {inputValue.length < max_titles &&
                    <div className="add-custom-option" onClick={() => addExtraField(inputValue, setInputValue)}>
                        + add another title
                    </div>
                }


                <div className="full-length-container">
                    <div className="radio-and-input-container low-padding auto-grow extra-wide">
                        <label className="align-center">Would you like to exclude any titles? <br></br>For example: "Consultants"</label>
                        <span className='centered-radio'><RadioButton label="No" value={excludedTitlesDisabled} onChange={() => setExcludedTitlesDisabled(true)} /></span>
                        <span className='centered-radio mb-1'><RadioButton label="Yes" value={!excludedTitlesDisabled} onChange={() => setExcludedTitlesDisabled(false)} /></span>
                        {excludedTitles.map((value, index) => {
                            return (
                                <div className="centered" key={index}>
                                    <div className="input-bar centered">
                                        <FormInput
                                            type="text"
                                            inputValue={excludedTitles[index]}
                                            inputName="excluded_titles"
                                            placeholder="Exclude title"
                                            onChange={(e) => update_input_value(e, index, excludedTitles, setExcludedTitles)}
                                        />
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>

                {excludedTitles.length < max_titles &&
                    <div className="add-custom-option" onClick={() => addExtraField(excludedTitles, setExcludedTitles)}>
                        + add another title
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

export default TargetTitlesPage;