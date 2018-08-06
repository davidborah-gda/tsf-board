/* eslint-disable */

import React from 'react';
import './CallsCard.css';

const CallsCard = (props) => (
    
    
    <div className="Calls-container">
    <h1 className="Total-calls-title">Calls Today</h1>
    <div className="Daily-calls-container">
    <h1 className="Daily-calls">88</h1>
    </div>
    <div className="Buttons-row">
    <button className="increase">▲</button>
    <button className="decrease">▼</button>
    <div className="TotalCalls-container">
    <h3 className="Weekly-title">Weekly Total</h3>
    <h1 className="Weekly-total-calls">99</h1>
    </div>
    </div>
    </div>
)

export default CallsCard;