import React, { useState } from 'react'
import Button from '../../components/Button/Button';
import { FormInput } from '../../components/Form/Form';
import { current_data, checkboxes } from './SettingsData';

import './Settings.css';

export default function SettingsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState([...current_data, ...checkboxes]);

  const changePage = () => {
    let page = currentPage === 1 ? 2 : 1;
    setCurrentPage(page);
  }

  const update_field_value = (e, key, is_checkbox = false) => {
    // get index of key
    let index = userData.findIndex(item => item.name === key);
    //update array data at index
    let new_data = [...userData];
    new_data[index].value = !is_checkbox ? e : e.target.checked;
    setUserData(new_data);
  }

  const handleSaveSettings = () => {
    // This should change to an HTTP request
    console.log('save user data: ', userData);
  }
 

  return (
    <div className="main-content">
      <div className="header-container">
        <div className="page-title">
          Settings
        </div>
        <div className="save-button">
          <Button variant="primary" onClick={() => handleSaveSettings()} children="Save settings" />
        </div>
      </div>
      <div className="pagify-container">
        <p>Page {currentPage} of 2
          <span onClick={() => changePage()}>&nbsp;&nbsp;
            {currentPage === 1 && <span className="pagify-arrows" >&gt;</span>} &nbsp;
            {currentPage === 2 && <span className="pagify-arrows" >&lt;</span>}
          </span>
        </p>
      </div>
      <div className="fields-container">
        <div className={currentPage === 1 ? "edit-field-container" : "edit-field-container-2"}>
          {current_data.filter(obj => obj.page === currentPage).map((obj, index) => {
            return (<FormInput
              type="text"
              inputId={obj.name}
              title={obj.name}
              inputValue={obj.value}
              onChange={(e) => update_field_value(e, obj.name)}
            />)
          })}
        </div>
        {currentPage === 2 &&
          (<div className="checkbox-container">
            <div className="checkbox-header-wrapper">
              <p className="checkbox-header-wrapper-text">What would you like us to track?</p>
            </div>
            <div className="checkbox-input-container">
              {checkboxes.map((obj, index) => {
                return (
                  <div className="checkbox-input-wrapper">
                    <input type="checkbox"
                      id={obj.name}
                      name={obj.name}
                      value={obj.value}
                      onClick={(e) => update_field_value(e, obj.name, true)}
                      checked={obj.value}
                    />
                    <label htmlFor={obj.name}>{obj.name}</label>
                  </div>)
              })}
            </div>
          </div>)
        }
      </div>


    </div>

  )
}
