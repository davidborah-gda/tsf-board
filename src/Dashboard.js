/* eslint-disable */

import React from 'react';
import './Dashboard.css';
import DashboardRow from './DashboardRow';


const Dashboard = (props) => (
    <div className="Dashboard-container">
      <img src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/src/TSF_Logo_White.png" className="TSF-logo"/>
      <div className="Dashboard-Metrics-container">
      <div className="User-Row-Heading-container">
      <h4 className="Test-User">Participant Name</h4>
      <h4 className="Test-User">Total Calls</h4>
      <h4 className="Test-User">DM Name</h4>
      <h4 className="Test-User">DM Email</h4>
      <h4 className="Test-User">Meetings</h4>
      <h4 className="Test-User">Proposals</h4>
      <h4 className="Test-User">Social Links</h4>
      <h4 className="Test-User">Other Success</h4>
      <h4 className="Test-User">Total Sales</h4>
      </div>
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      </div>
    </div>
)

export default Dashboard;