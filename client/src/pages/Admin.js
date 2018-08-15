import React, { Component } from 'react';
import './Admin.css';


class Admin extends Component {
  
setEventTitle(evt) {
  this.setState({
    EventTitle: evt.target.value
  })
}

  render() {
  return (
    <div className="Admin-container">
      <h3>Time Clock Settings</h3>
      <input className="TimeClock-input" placeholder="Time in Minutes ex. 15"  />
      <button className="TSF-admin-button">Start Time Clock</button>
      <h4>Custom Event Title</h4>
      <input onChange={this.setEventTitle.bind(this)} className="Event-Title-input" placeholder="Event Title" />
    <button className="TSF-admin-button">Save Event Title</button>
    </div>
)}
}

export default Admin;