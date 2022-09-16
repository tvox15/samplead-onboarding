import React from 'react'
import CheckboxInputTemplate from '../templates/CheckboxInputTemplate'

const options = ["Self employed", "1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001-10000", "10000+"];

export default function CompanyHeadcountPage({handleNavClick}) {
  return (<>
    <CheckboxInputTemplate
    inputHeader="Company headcount of your target audience"
    inputKey="companyHeadcount"
    options={options}
    handleNavClick={handleNavClick}
       />
  </>
   )
}
