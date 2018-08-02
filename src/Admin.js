/* eslint-disable */

import React from 'react';
import './Admin.css';


const Admin = (props) => (
    <div className="Admin-container">
      <h3>Time Clock Settings</h3>
      <input className="TimeClock-input" placeholder="Time in Minutes ex. 15"  />
      <button className="TSF-button">Start Time Clock</button>
      <h4>Company Name for todays selling blitz</h4>
      <input className="CompanyName-input" placeholder="Company Name" />
    <button className="TSF-button">Save Company Name</button>
    </div>
)

export default Admin;