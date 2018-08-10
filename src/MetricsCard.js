import React from 'react';
import './MetricsCard.css';


const MetricsCard = (props) => (
    
    <div className="Main-container1">
    <div className="Metrics-container1">
    <p className="Total-calls-title1">Other Metric</p>
    <p className="Daily-calls1">55</p>
    <div className="Buttons-row1">
    <button className="increaseMet">▲</button>
    <button className="decreaseMet">▼</button>
    <div className="TotalCalls-container1">
    <h1 className="Weekly-total-calls1">22</h1>
    </div>
    </div>
    </div>
    </div>
)

export default MetricsCard;