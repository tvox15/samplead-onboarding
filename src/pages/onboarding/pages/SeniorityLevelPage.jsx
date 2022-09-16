import React from 'react'
import CheckboxInputTemplate from '../templates/CheckboxInputTemplate'

const options = ["Owner", "Partner", "CXO", "VP", "Director", "Manager", "Senior", "Entry", "Training"];

export default function SeniorityLevelPage({ handleNavClick }) {
    return (<>
        <CheckboxInputTemplate
            inputHeader="Seniority Level"
            inputKey="seniorityLevel"
            options={options}
            custom_options={true}
            handleNavClick={handleNavClick}
        />
    </>
    )
}
