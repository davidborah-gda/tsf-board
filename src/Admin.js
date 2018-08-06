/* eslint-disable */

import React from 'react';
import './Admin.css';


const Admin = (props) => (
    <div className="Admin-container">
      <h3>Time Clock Settings</h3>
      <input className="TimeClock-input" placeholder="Time in Minutes ex. 15"  />
      <button className="TSF-admin-button">Start Time Clock</button>
      <h4>Custom Event Title</h4>
      <input className="Event-Title-input" placeholder="Event Title" />
    <button className="TSF-admin-button">Save Event Title</button>
    </div>
)

export default Admin;