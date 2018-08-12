import React from "react";
import "./User.css";
import CallsCard from "./CallsCard";
import MetricsCard from "./MetricsCard";

const User = props => (
  <div className="User-Page-Main-Container">
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
      <div className="Main-Metrics-container">
      <MetricsCard title="DM Name" />
      <MetricsCard title="DM Email" />
      <MetricsCard title="Meetings" />
      <MetricsCard title="Proposals" />
      <MetricsCard title="Social Link" />
      <MetricsCard title="Other Success" />
      <MetricsCard title="Sales" />
      </div>
    </div>
  </div>
);

export default User;
