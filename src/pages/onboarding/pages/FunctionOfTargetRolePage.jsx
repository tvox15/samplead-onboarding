import React from 'react'
import CheckboxInputTemplate from '../templates/CheckboxInputTemplate'

const options = ["Finance", "Marketing", "Product", "Purchasing", "Engineering", "Operations", "Sales", "Education", "Media and Communication",
    "Program Management", "Project Management", "Human resources", "Entrepreneurshiop", "Business Development", "Information Technology", "Arts and Design"];

export default function FunctionOfTargetRolePage({ handleNavClick }) {
    return (<>
        <CheckboxInputTemplate
            inputHeader="Function (Role of the person you are targeting)"
            inputKey="functionOfTargetRole"
            options={options}
            custom_options={true}
            handleNavClick={handleNavClick}
        />
    </>
    )
}
