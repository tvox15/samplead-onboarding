import React from 'react';
import Button from '../../components/Button/Button';

import './NavButtons.css'

const NavButtons = ({ handleNavClick, firstPage = false, }) => {
    return (
        <div className="navigation-container">
            {!firstPage && <Button variant="primary" onClick={() => { handleNavClick("previous") }}>Previous (test)</Button>}
            {!firstPage && <Button variant="primary" onClick={() => { handleNavClick("skip") }}>Skip</Button>}
            <Button variant="primary-white" onClick={() => handleNavClick("next")} >Next</Button>
        </div>
    )
}

export default NavButtons;