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
                    <p className="input-caption-text">Before we start, our AI needs to get to know you, your<br></br>business, and your goals. This may take a couple of minutes.</p>
                </div>
            </div>
            <NavButtons handleNavClick={handleNavClick} firstPage={true} />

        </>
    )
}
