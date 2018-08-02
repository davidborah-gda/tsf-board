/* eslint-disable */

import React from 'react';
import './Dashboard.css';


const Dashboard = (props) => (
    <div className="Dashboard-container">
      <img src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/src/TSF_Logo_White.png" className="TSF-logo"/>
      <div className="Dashboard-Metrics-container">
      <div className="User-Row-container">
      <h4 className="Test-User">User Name</h4>
      <h4 className="Test-User">Total Calls</h4>
      <h4 className="Test-User">DM Name</h4>
      <h4 className="Test-User">DM Email</h4>
      <h4 className="Test-User">Meetings Set</h4>
      <h4 className="Test-User">Proposals Sent</h4>
      <h4 className="Test-User">Social Links</h4>
      <h4 className="Test-User">Other Success</h4>
      <h4 className="Test-User">Sales Completed</h4>
      </div>
      </div>
    </div>
)

export default Dashboard;