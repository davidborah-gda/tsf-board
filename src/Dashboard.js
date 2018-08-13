import React from 'react';
import moment from 'moment'
import Countdown from 'react-countdown-moment'
import './Dashboard.css';
import DashboardRow from './DashboardRow';

const endDate = moment().add(2, 'hours')

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
    <h2 className="Timer-text"><Countdown endDate={endDate} /></h2>
    </div>
    </div>
      <img src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/src/TSF_Logo_White.png" className="TSF-logo"/>
      <div className="Dashboard-Metrics-container">
      <div className="User-Row-Heading-container">
      <p className="Dash-Metrics-Title-Name">Participant Name</p>
      <p className="Dash-Metrics-Title">Total Calls</p>
      <p className="Dash-Metrics-Title">DM Name</p>
      <p className="Dash-Metrics-Title">DM Email</p>
      <p className="Dash-Metrics-Title">Meetings</p>
      <p className="Dash-Metrics-Title">Proposals</p>
      <p className="Dash-Metrics-Title">Social Links</p>
      <p className="Dash-Metrics-Title">Other Success</p>
      <p className="Dash-Metrics-Title">Total Sales</p>
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
      
      </div>
    </div>
)

export default Dashboard;