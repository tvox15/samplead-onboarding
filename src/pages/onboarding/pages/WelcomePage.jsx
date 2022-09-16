import React from 'react'
import NavButtons from '../../../components/NavButtons/NavButtons';
import '../onboarding.css';

export default function WelcomePage({ handleNavClick }) {
    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text">Welcome!</div>
                </div>
                <div className="input-caption-container">
                    <p className="input-caption-text">Before we start, our AI needs to get to know you, your business, and your goals. this may take a couple of minutes.</p>
                </div>
            </div>
            <NavButtons handleNavClick={handleNavClick} firstPage={true} />

        </>
    )
}
