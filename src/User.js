/* eslint-disable */

import React from 'react';
import './User.css';


const User = (props) => (
    <div>
    <div className="User-Topbar-container">
    <img src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/src/TSF_Logo_Black_SM.jpeg" className="TSF-logo-SM" />
    <h1>John Smith</h1>
    </div>
    <div className="User-container">
    <div className="Calls-container">
    <h1>Total Calls</h1>
    <h1 className="Daily-calls">88</h1>
    <div className="Buttons-row">
    <button className="increase">▲</button>
    <button className="decrease">▼</button>
    <div className="TotalCalls-container">
    <h3>Weekly Total Calls</h3>
    <h1 className="Weekly-total-calls">99</h1>
    </div>
    </div>
    </div>
    <div className="Metrics-container">This is the Other Metrics Section.</div>
    </div>
    </div>
)

export default User;