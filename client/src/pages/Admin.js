import React, { Component } from 'react';
import '../css/Admin.css';
import axios from 'axios';

class Admin extends Component {
  
  state = {
    error: null
  };
  async login(evt) {
    evt.preventDefault();
    const form = evt.target;
    const inputs = Array.from(form.elements).filter(
      element => element.tagName === "INPUT"
    );
    const eventTitle = inputs.map(input => input.value);
    console.log(eventTitle);
    try {
      
    } catch (error) {
      this.setState({
        error: "Your Title is incorrect"
      });
      form.reset();
    }

    const auth = {
      login(email) {
        return axios.post("/api/user", { email }).then(response => {
          return response;
        });
      },
    }
  }

  adminForm (e) {
		e.preventDefault()
		this.props.history.push('/admin');
	}

  render() {
  return (
    <div className="Admin-container">
    <form onSubmit={this.adminForm.bind(this)}>
      <h3>Time Clock Settings</h3>
      <input className="TimeClock-input" placeholder="Time in Minutes ex. 15"  />
      <button className="TSF-admin-button">Start Time Clock</button>
      </form>
      <form onSubmit={this.adminForm.bind(this)}>
      <h4>Custom Event Title</h4>
      <input className="Event-Title-input" placeholder="Event Title" />
    <button type="submit" className="TSF-admin-button">Save Event Title</button>
    </form>
    </div>
)}
}

export default Admin;