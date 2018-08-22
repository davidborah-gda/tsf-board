import React from "react";
import { Component } from "react";
import "../css/User.css";
import CallsCard from "../pages/CallsCard";
import MetricsCard from "../pages/MetricsCard";
import { FaFileExcel } from "react-icons/fa";
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gravatarImg: {}
    };
  }

  componentDidMount() {
    const {gravatar} = this.props;
    const url = `https://en.gravatar.com/${gravatar}.json`;
    axios.get(url).then((response) => {
      this.setState({
        gravatarImg: response.data,
        success: true,
      });
    }).catch((error) => {
      this.setState({
        success: false,
        error,
      });
    });
  }


  render() {
    return (
      <div className="User-Page-Main-Container">
        <div className="User-Topbar-container">
          {this.props.gravatar && this.state.gravatarImg.entry ? (
            <img className="Gravatar"src={this.state.gravatarImg.entry[0].thumbnailUrl} />
          ) : (
            <img
              src="https://raw.githubusercontent.com/davidborah-gda/tsf-board/master/client/src/images/TSF_Logo_White.png"
              className="TSF-logo-SM"
            />
          )}
          <p className="Username-Title">John Smith</p>
          <button className="Export-Btn">
            <FaFileExcel /> Export
          </button>
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
  }
}

export default User;
