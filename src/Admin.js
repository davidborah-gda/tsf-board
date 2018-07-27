/* eslint-disable */

import React from 'react';
import './Admin.css';


const Admin = (props) => (
    <div className="Admin-container">
      <h1>Countdown Clock</h1>
      <h3>Please Enter the Time in Minutes</h3>
      <input className="TimeClock-input" />
      <button>Set Time Clock</button>
      <h1>Company Name</h1>
      <h3>Please Enter the Company Name for this selling Blitz</h3>
      <input className="CompanyName-input" />
    <button>Set Company Name</button>
    </div>
)

export default Admin;