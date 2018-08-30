import React from "react";
import "../css/Settings.css";
// import { Link } from "react-router-dom"; Not used in this component
import { Component } from "react";
import axios from 'axios';

const auth = {
  login(email,name,calls,DM_name,DM_email,meetings,proposals,sales,social,other,Rename_other) { // See Users.js under routers to see where this feeds into
    return axios.post("/api/users", { email, name, calls, DM_name, DM_email, meetings, proposals, sales, social, other, Rename_other }).then(response => {
      return response;
    });
  }
};

class Settings extends Component {
  state = { // Setting state for this interaction
    error: null,
    email: this.props.email,
    name: this.props.name
  };
  async settingsForm(evt) {
    evt.preventDefault(); // stops default submit behavior
    const form = evt.target; // this is the form object itself
    const inputs = Array.from(form.elements).filter( // this creates an array from your inputs from form
      element => element.tagName === "INPUT"
    );
    const [email, name, calls, DM_name, DM_email, meetings, proposals, sales, social, other, Rename_other ] = inputs.map((input) => {return input.value}); // Declaring values for what is entered on form
    console.log("This is the value of email right after the const declaration")
    console.log(email);
    console.log("This is the value of name right after the const declaration")
    console.log(name);
    console.log("This is the value of calls right after the const declaration")
    console.log(calls);
    try {
      await auth.login(email,name,calls,DM_name,DM_email,meetings,proposals,sales,social,other,Rename_other); // This begins database interaction, feeding in values
      this.props.onSettingsChange(email,name); // This is where the email and now name state gets passed
      this.props.history.push("/user"); // This is where the page gets switched to user

    } catch (error) { // Shouldn't run if everything's good
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
            
            <legend>Choose your sales metrics settings!</legend>
            <input
              className="Email-input"
              placeholder="Your Email: ex: hello@company.com"
            />
            <input
              className="Name-input"
              placeholder="Your Name: ex: John Smith"
            />
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
