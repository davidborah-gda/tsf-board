import React, { Component } from "react";
import "../css/Admin.css";
import axios from "axios";

const auth = {
  login(email) {
    return axios.post("/api/event", { email }).then(response => {
      return response;
    });
  }
};

class Admin extends Component {
  state = {
    error: null
  };
  async adminForm(evt) {
    evt.preventDefault();
    const form = evt.target;
    const inputs = Array.from(form.elements).filter(
      element => element.tagName == "INPUT"
    );
    const [email] = inputs.map(input => input.value);
    try {
      await auth.login(email);
      this.setState(email);
    } catch (error) {
      this.setState({
        error: "Your Event Title or Clock Time is incorrect",
        something: error
      });
      form.reset();
    }
  }

  render() {
    return (
      <div className="Admin-container">
        <form onSubmit={this.adminForm.bind(this)}>
          <h3>Time Clock Settings</h3>
          <input
            className="TimeClock-input"
            placeholder="Time in Minutes ex. 15"
          />
          <button type="submit" className="TSF-admin-button">Start Time Clock</button>
        </form>
        <form onSubmit={this.adminForm.bind(this)}>
          <h4>Custom Event Title</h4>
          <input className="Event-Title-input" placeholder="Event Title" />
          <button type="submit" className="TSF-admin-button">
            Save Event Title
          </button>
        </form>
      </div>
    );
  }
}

export default Admin;
