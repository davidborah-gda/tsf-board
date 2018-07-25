/* eslint-disable */

import React from 'react';
import './Settings.css';


const Settings = (props) => (
    <div className="Settings-container">
      <fieldset>
    <legend>Choose your sales metrics settings!</legend>

    <div>
        <input type="checkbox" id="scales" name="feature"
               value="scales" checked />
        <label for="scales">Calls Completed</label>
    </div>

    <div>
        <input type="checkbox" id="horns" name="feature"
               value="horns" />
        <label for="horns">Meetings Scheduled</label>
    </div>

    <div>
        <input type="checkbox" id="claws" name="feature"
               value="claws" />
        <label for="claws">Sales Completed</label>
    </div>

</fieldset>

    </div>
)

export default Settings;