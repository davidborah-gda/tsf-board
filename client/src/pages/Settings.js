/* eslint-disable */

import React from 'react';
import '../css/Settings.css';
import { Link } from 'react-router-dom'


const Settings = (props) => (
    <div className="Settings-container">
      <form>
      <fieldset>
    <input className="Name-input" placeholder="Your Name: ex: John Smith" />
    <legend>Choose your sales metrics settings!</legend>

    <div>
        <input type="checkbox" id="calls"
               value="Calls" checked />
        <label>Calls Completed</label>
    </div>

    <div>
        <input type="checkbox" id="DM_name"
               value="DMname" />
        <label>Decision Maker Name</label>
    </div>

    <div>
        <input type="checkbox" id="DM_email"
               value="DMemail" />
        <label>DM Email Address</label>
    </div>

     <div>
        <input type="checkbox" id="meetings"
               value="Meetings" />
        <label>Meetings Scheduled</label>
    </div>

     <div>
        <input type="checkbox" id="proposals"
               value="Proposals" />
        <label>Proposals Sent</label>
    </div>

    <div>
        <input type="checkbox" id="sales"
               value="Sales" />
        <label>Sales Completed</label>
    </div>

    <div>
        <input type="checkbox" id="social"
               value="SocialLinks" />
        <label>Social Links</label>
    </div>

    <div>
        <input type="checkbox" id="other"
               value="OtherSuccess" />
        <label>Other Success</label>
    </div>

    <div>
        <input className="rename" id="custom" placeholder="(optional) Rename 'Other Success' metrics" />
    </div>
</fieldset>
<Link to='/user'><button type="submit" className="TSF-Settings-button">Save Settings</button></Link>
</form>
    </div>
)

export default Settings;