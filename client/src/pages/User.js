import React from "react";
import "../css/User.css";
import CallsCard from "../pages/CallsCard";
import MetricsCard from "../pages/MetricsCard";
import { FaFileExcel } from 'react-icons/fa';

const User = props => (
  <div className="User-Page-Main-Container">
    <div className="User-Topbar-container">
      <img
        src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/client/src/images/TSF_Logo_White.png"
        className="TSF-logo-SM"
      />
      <p className="Username-Title">John Smith</p>
      <button className="Export-Btn"><FaFileExcel /> Export</button>
    </div>
    <div className="User-container">
      <CallsCard title="Calls Today" />
      <div className="Main-Metrics-container">
      <MetricsCard title="DM Name" />
      <MetricsCard title="DM Email" />
      <MetricsCard title="Meetings" />
      <MetricsCard title="Proposals" />
      <MetricsCard title="Social Links" />
      <MetricsCard title="Other" />
      <MetricsCard title="Sales" />
      </div>
    </div>
  </div>
);

export default User;
