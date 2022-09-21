import React, { useState } from 'react'
import { FormInput } from '../../../components/Form/Form';
import RadioButton from '../../../components/RadioButton';
import NavButtons from '../../../components/NavButtons/NavButtons';
import { remove_or_add_from_array } from '../../../utils/utils';
import { DISABLE_ERRORS } from '../../../utils/constants';

import '../onboarding.css';


// { inputHeader, inputKey, options, handleNavClick, customOptions= false }
const GeoLocationsPage = ({ handleNavClick, options, checkboxWidth, columns }) => {

    const column_class = columns ? `checkbox-col-${columns}` : "";
    const checkbox_width = checkboxWidth ? `checkbox-w-${checkboxWidth}` : "";

    const [geoLocations, setGeoLocations] = useState([]); // for checkboxes

    const [includeSpecificTerritories, setIncludeSpecificTerritories] = useState(false);
    const [specificTerritories, setSpecificTerritories] = useState("");

    const [includeExcludeCities, setIncludeExcludeCities] = useState(false);
    const [excludeCities, setExcludeCities] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const update_input_value = (e) => {
        // if inside inputValue, remove it
        setGeoLocations(remove_or_add_from_array(geoLocations, e.target.value));
        console.log('geoLocations', geoLocations);
        console.log('specificTerritories', specificTerritories);
        console.log('excludeCities', excludeCities);

    }

    const next_clicked = (action) => {
        setErrorMsg(false);
        let hasError = false;
        // validate input
        if (action === "next") {
            if (geoLocations.length === 0) {
                setErrorMsg("Please select at least one option");
                hasError = true;
            }
        }
        if (hasError && !DISABLE_ERRORS) return;
        let response_obj = [
            {
                key: "geolocations",
                value: geoLocations
            },
            {
                key: "specificTerritories",
                value: includeSpecificTerritories ? specificTerritories : ""
            },
            {
                key: "excludeCities",
                value: includeExcludeCities ? excludeCities : ""
            }
        ]
        handleNavClick(action, response_obj);
    }

    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>Geographic locations you are aiming at:</p></div>
                </div>
                <div className="checkbox-wrapper">
                    <div className={`checkbox-container ${checkbox_width}`}>
                        {options.map((option, i) => {
                            return (
                                <div key={i} className={`checkbox-input  ${column_class}`}>
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

                {/* Questions below checkbox inputs */}
                <div className="bottom-question-container">
                    <div className="radio-and-input-container right-question">
                        <label>Do you have a specific territory?</label>
                        <RadioButton label="No" value={!includeSpecificTerritories} onChange={() => setIncludeSpecificTerritories(false)} />
                        <RadioButton label="Yes" value={includeSpecificTerritories} onChange={() => setIncludeSpecificTerritories(true)} />
                        <FormInput inputDisabled={!includeSpecificTerritories} type="text" placeholder="City name" onChange={(e) => setSpecificTerritories(e)} />
                    </div>
                    <div className="radio-and-input-container left-question">
                        <label>Do you want to exclude any cities?</label>
                        <RadioButton label="No" value={!includeExcludeCities} onChange={() => setIncludeExcludeCities(false)} />
                        <RadioButton label="Yes" value={includeExcludeCities} onChange={() => setIncludeExcludeCities(true)} />
                        <FormInput inputDisabled={!includeExcludeCities} type="text" placeholder="City name" onChange={(e) => { setExcludeCities(e) }} />
                    </div>
                </div>

            </div>
            <NavButtons handleNavClick={next_clicked} />
        </>
    );
}

export default GeoLocationsPage;
/*
 title,
    type,
    inputId,
    inputName,
    placeholder,
    inputDisabled,
    inputValue,
    validator,
    onChange,
    onKeyUp,
    initialMessage
    */