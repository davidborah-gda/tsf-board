import React from "react";
import "../css/Settings.css";
// import { Link } from "react-router-dom"; Not used in this component
import { Component } from "react";
import axios from 'axios';

let callsChecked = false; // Hardcoded values for the status of checkboxes
let decisionMakerChecked = false;
let dmEmailChecked = false;
let meetingsChecked = false;
let proposalsChecked = false;
let salesdChecked = false;
let socailChecked = false;
let OtherChecked = false;

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
    testingstate: true

  }; 

  toggleCalls = () => {
    if(callsChecked) {
      callsChecked = false;
    }
    else {
      callsChecked = true;
    }
    console.log("ToggleCalls = " + callsChecked)
  }


  toggleDecision = () => {  // Manually grabbing each checkbox value, individually
    if(decisionMakerChecked) {
      decisionMakerChecked = false;
    }
    else {
      decisionMakerChecked = true;
    }
    console.log("Toggle Decisions = " + decisionMakerChecked)
  }

  toggleDMemail = () => {
    if(dmEmailChecked) {
      dmEmailChecked = false;
    }
    else {
      dmEmailChecked = true;
    }
    console.log("Toggle DM Email = " + dmEmailChecked)
  }

  toggleMeetings = () => {
    if(meetingsChecked) {
      meetingsChecked = false;
    }
    else {
      meetingsChecked = true;
    }
    console.log("Toggle Meetings = " + meetingsChecked)
  }

  toggleProposals = () => {
    if(proposalsChecked) {
      proposalsChecked = false;
    }
    else {
      proposalsChecked = true;
    }
    console.log("Toggle Proposals = " + proposalsChecked)
  }

  toggleSales = () => {
    if(salesdChecked) {
      salesdChecked = false;
    }
    else {
      salesdChecked = true;
    }
    console.log("Toggle Sales = " + salesdChecked)
  }

  toggleSocial = () => {
    if(socailChecked) {
      socailChecked = false;
    }
    else {
      socailChecked = true;
    }
    console.log("Toggle Social = " + socailChecked)
  }
  
  toggleOther = () => {
    if(OtherChecked) {
      OtherChecked = false;
    }
    else {
      OtherChecked = true;
    }
    console.log("Toggle Other = " + OtherChecked)
  }

  

  async settingsForm(evt) {
    evt.preventDefault(); // stops default submit behavior
    const form = evt.target; // this is the form object itself
    const inputs = Array.from(form.elements).filter( // this creates an array from your inputs from form
      element => element.tagName === "INPUT"
    );

    for (let i=0; i<inputs.length; i++) { // console logging of values of form items upon submit
      console.log(i + " " + inputs[i].value);
    }

    const [email, name, calls, DM_name, DM_email, meetings, proposals, sales, social, other, Rename_other ] = inputs.map((input) => {return input.value}); // Declaring values for what is entered on form
    console.log("This is the value of email right after the const declaration")
    console.log(email);
    console.log("This is the value of name right after the const declaration")
    console.log(name);
    console.log("This is the value of calls right after the const declaration")
    console.log(calls);
    try {
      // Now the update to the database for this section will send True/False (0 or 1) to the database for if these are checked or not
      await auth.login(email,name,callsChecked,decisionMakerChecked,dmEmailChecked,meetingsChecked,proposalsChecked,salesdChecked,socailChecked,OtherChecked,Rename_other); // This begins database interaction, feeding in values
      this.props.onSettingsChange(email,name,calls,DM_name,DM_email,meetings,proposals,sales,social,other,Rename_other); // This is where the email and now name state gets passed
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
              <input type="checkbox" id="calls" onChange={this.toggleCalls} />
              <label>Calls Completed</label>
            </div>

            <div>
              <input type="checkbox" id="DM_name" value="DMname" onChange={this.toggleDecision} />
              <label>Decision Maker Name</label>
            </div>

            <div>
              <input type="checkbox" id="DM_email" value="DMemail" onChange={this.toggleDMemail}/>
              <label>DM Email Address</label>
            </div>

            <div>
              <input type="checkbox" id="meetings" value="Meetings" onChange={this.toggleMeetings}/>
              <label>Meetings Scheduled</label>
            </div>

            <div>
              <input type="checkbox" id="proposals" value="Proposals" onChange={this.toggleProposals}/>
              <label>Proposals Sent</label>
            </div>

            <div>
              <input type="checkbox" id="sales" value="Sales" onChange={this.toggleSales}/>
              <label>Sales Completed</label>
            </div>

            <div>
              <input type="checkbox" id="social" value="SocialLinks" onChange={this.toggleSocial}/>
              <label>Social Links</label>
            </div>

            <div>
              <input type="checkbox" id="other" value="OtherSuccess" onChange={this.toggleOther}/>
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
