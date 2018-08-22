import React from "react";
import "../css/Settings.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from 'axios';

const auth = {
  login(email) {
    return axios.post("/api/users", { email }).then(response => {
      return response;
    });
  }
};

class Settings extends Component {
  state = {
    error: null,
    email: this.props.email
  };
  async settingsForm(evt) {
    evt.preventDefault();
    const form = evt.target;
    const inputs = Array.from(form.elements).filter(
      element => element.tagName == "INPUT"
    );
    const [email] = inputs.map(input => input.value);
    try {
      await auth.login(email);
      this.props.history.push("/user");
    } catch (error) {
      this.setState({
        error: "Your Settings are incorrect",
        something: error
      });
      form.reset();
    }
  }

  render() {
    return (
      <div className="Settings-container">
        <form onSubmit={this.settingsForm.bind(this)}>
          <fieldset>
            <input
              className="Name-input"
              placeholder="Your Name: ex: John Smith"
            />
            <legend>Choose your sales metrics settings!</legend>

            <div>
              <input type="checkbox" id="calls" value="Calls" checked readOnly/>
              <label>Calls Completed</label>
            </div>

            <div>
              <input type="checkbox" id="DM_name" value="DMname" />
              <label>Decision Maker Name</label>
            </div>

            <div>
              <input type="checkbox" id="DM_email" value="DMemail" />
              <label>DM Email Address</label>
            </div>

            <div>
              <input type="checkbox" id="meetings" value="Meetings" />
              <label>Meetings Scheduled</label>
            </div>

            <div>
              <input type="checkbox" id="proposals" value="Proposals" />
              <label>Proposals Sent</label>
            </div>

            <div>
              <input type="checkbox" id="sales" value="Sales" />
              <label>Sales Completed</label>
            </div>

            <div>
              <input type="checkbox" id="social" value="SocialLinks" />
              <label>Social Links</label>
            </div>

            <div>
              <input type="checkbox" id="other" value="OtherSuccess" />
              <label>Other Success</label>
            </div>

            <div>
              <input
                className="rename"
                id="custom"
                placeholder="(optional) Rename 'Other Success' metrics"
              />
            </div>
          </fieldset>
          <button type="submit" className="TSF-Settings-button">
            Save Settings
          </button>
        </form>
      </div>
    );
  }
}

export default Settings;
