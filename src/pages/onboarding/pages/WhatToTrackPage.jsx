import React from 'react'
import CheckboxInputTemplate from '../templates/CheckboxInputTemplate'

const options = ["Job change",  "News articles", "Linkedin groups", "Linkedin posts","Linkedin events","Medium activity", "Twitter tweets", "Funding event"];

export default function WhatToTrackPage({handleNavClick}) {
  return (<>
    <CheckboxInputTemplate
    inputHeader="Let's start with the fun part- what would you like us to track?"
    inputKey="whatToTrack"
    options={options}
    handleNavClick={handleNavClick}
       />
  </>
   )
}
