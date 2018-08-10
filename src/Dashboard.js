/* eslint-disable */

import React from 'react';
import './Dashboard.css';
import DashboardRow from './DashboardRow';


const Dashboard = (props) => (
    <div className="Dashboard-container">
    <div className="Event-Topbar">
    <div className="Topbar-logo-container">
    <img src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/src/TSF_Logo_Black_SM.jpeg" className="TSF-logo-sm"/>
    </div>
    <div className="Event-title-container">
    <h2 className="Event-title">Event Title</h2>
    </div>
    <div className="Timer-container">
    <h2 className="Timer-text">15:00</h2>
    </div>
    </div>
      <img src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/src/TSF_Logo_White.png" className="TSF-logo"/>
      <div className="Dashboard-Metrics-container">
      <div className="User-Row-Heading-container">
      <h4 className="Dash-Metrics-Title-Name">Participant Name</h4>
      <h4 className="Dash-Metrics-Title">Total Calls</h4>
      <h4 className="Dash-Metrics-Title">DM Name</h4>
      <h4 className="Dash-Metrics-Title">DM Email</h4>
      <h4 className="Dash-Metrics-Title">Meetings</h4>
      <h4 className="Dash-Metrics-Title">Proposals</h4>
      <h4 className="Dash-Metrics-Title">Social Links</h4>
      <h4 className="Dash-Metrics-Title">Other Success</h4>
      <h4 className="Dash-Metrics-Title">Total Sales</h4>
      </div>
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      <DashboardRow />
      </div>
    </div>
)

export default Dashboard;