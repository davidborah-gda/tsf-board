/* eslint-disable */

import React from "react";
import "./User.css";
import CallsCard from "./CallsCard";
import MetricsCard from "./MetricsCard";

const User = props => (
  <div className="Metrics-Main-Container">
    <div className="User-Topbar-container">
      <img
        src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/src/TSF_Logo_Black_MD.jpg"
        className="TSF-logo-SM"
      />
      <p className="Username-title">John Smith</p>
      <button className="Export-Btn">Export Data</button>
    </div>
    <div className="User-container">
      <CallsCard />
      <div className="Metrics-container">
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
      </div>
    </div>
  </div>
);

export default User;
