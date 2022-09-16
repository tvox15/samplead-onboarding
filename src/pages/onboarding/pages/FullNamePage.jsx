import React from 'react'
import '../onboarding.css';
import SingleInputTemplate from '../templates/SingleInputTemplate';

const FullNamePage = ({ handleNavClick }) => {
    return (
        <>
            <SingleInputTemplate inputHeader="Full Name" inputKey="fullName" handleNavClick={handleNavClick} />
        </>
    )
}

export default FullNamePage;
