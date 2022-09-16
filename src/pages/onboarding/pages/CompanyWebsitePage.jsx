import React from 'react'
import '../onboarding.css';
import SingleInputTemplate from '../templates/SingleInputTemplate';

export default function CompanyNamePage({handleNavClick}) {
    return (
        <>
           <SingleInputTemplate inputHeader="Company Website" inputKey="companyWebsite" handleNavClick={handleNavClick} />
        </>
    )
}
