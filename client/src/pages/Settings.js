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
        <input type="checkbox" id="calls" name="feature"
               value="scales" checked />
        <label for="scales">Calls Completed</label>
    </div>

    <div>
        <input type="checkbox" id="DM_name" name="feature"
               value="claws" />
        <label for="claws">Decision Maker Name</label>
    </div>

    <div>
        <input type="checkbox" id="DM_email" name="feature"
               value="claws" />
        <label for="claws">DM Email Address</label>
    </div>

     <div>
        <input type="checkbox" id="meetings" name="feature"
               value="horns" />
        <label for="horns">Meetings Scheduled</label>
    </div>

     <div>
        <input type="checkbox" id="proposals" name="feature"
               value="horns" />
        <label for="horns">Proposals Sent</label>
    </div>

    <div>
        <input type="checkbox" id="Sales" name="feature"
               value="claws" />
        <label for="claws">Sales Completed</label>
    </div>

    <div>
        <input type="checkbox" id="social" name="feature"
               value="claws" />
        <label for="claws">Social Links</label>
    </div>

    <div>
        <input type="checkbox" id="other" name="feature"
               value="claws" />
        <label for="claws">Other Success</label>
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