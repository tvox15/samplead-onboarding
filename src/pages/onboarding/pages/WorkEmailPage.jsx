import React from 'react'
import '../onboarding.css';
import SingleInputTemplate from '../templates/SingleInputTemplate';

const FullNamePage = ({ handleNavClick }) => {
    return (
        <>
            <SingleInputTemplate inputHeader="Work Email" inputKey="workEmail" type="email" handleNavClick={handleNavClick} />
        </>
    )
}

export default FullNamePage;
