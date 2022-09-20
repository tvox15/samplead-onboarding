import React, { useState } from 'react'
import Button from '../../components/Button/Button';
import { FormInput } from '../../components/Form/Form';
import { current_data, checkboxes } from './SettingsData';

import './Settings.css';

export default function SettingsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState(current_data);

  const changePage = () => {
    let page = currentPage === 1 ? 2 : 1;
    setCurrentPage(page);
  }

  return (
    <div className="main-content">
      <div className="header-container">
        <div className="page-title">
          Settings
        </div>
        <div className="save-button">
          <Button variant="primary" children="Save settings" />
        </div>
      </div>
      <div className={currentPage === 1 ? "edit-field-container" : "edit-field-container-2"}>
        {current_data.filter(obj => obj.page === currentPage).map((obj, index) => {
          return (<FormInput
            type="text"
            inputId={obj.name}
            title={obj.name}
            inputValue={obj.value}
          />)
        })}
      </div>
      {currentPage === 2 && <div className="checkbox-wrapper">
        <p className="checkbox-header">What would you like us to track?</p>
      </div>}
      <div className="pagify-container">
        <p >Page {currentPage} of 2
          <span onClick={() => changePage()}>&nbsp;&nbsp;
            {currentPage === 1 && <span className="pagify-arrows" >&gt;</span>} &nbsp;
            {currentPage === 2 && <span className="pagify-arrows" >&lt;</span>}
          </span>
        </p>
      </div>
    </div>

  )
}
