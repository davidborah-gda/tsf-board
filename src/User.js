/* eslint-disable */

import React from 'react';
import './User.css';


const User = (props) => (
    <div>
    <div className="User-Topbar-container">
    <h3>Gravatar</h3>
    <h1>John Smith</h1>
    </div>
    <div className="User-container">
    <div className="Calls-container">
    <h1>88</h1>
    <button className="increase">+</button>
    <button className="decrease">-</button>
    <div className="TotalCalls-container">
    <h1>99</h1>
    </div>
    </div>
    <div className="Metrics-container">This is the Other Metrics Section.</div>
    </div>
    </div>
)

export default User;