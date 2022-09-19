import React from 'react'
import NavButtons from '../../components/NavButtons/NavButtons';
import '../onboarding.css';

export default function WelcomePage({ inputHeader, subheaderText, handleNavClick }) {
    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text">{inputHeader}</div>
                </div>
                <div className="input-caption-container">
                    <p className="input-caption-text">{subheaderText}</p>
                </div>
            </div>
            <NavButtons handleNavClick={handleNavClick} firstPage={true} />

        </>
    )
}
