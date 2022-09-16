import React from 'react'
import CheckboxInputTemplate from '../templates/CheckboxInputTemplate'

const options = ["Cyber Security", "Hi-tech", "B2B SAAS", "Fintech", "Internet", "B2B Software", "B2B Hardware", "Marketing", "Libraries"];

export default function TargetIndustriesPage({handleNavClick}) {
  return (<>
    <CheckboxInputTemplate
    inputHeader="Industries you aim to target"
    inputKey="targetIndustries"
    options={options}
    custom_options={true}
    handleNavClick={handleNavClick}
       />
  </>
   )
}
