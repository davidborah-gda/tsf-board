import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

class App extends Component {
  state = {
    email: '',
    name: ''
  }
  handleEmailChange = (email, name) => { // This handles email AND name now 
    this.setState({
      email: email,
      name: name
    })
  }
  render() {
    return (
      <div className="App-container">
        <Switch>
          <Route exact path="/settings" render={routerProps => <Settings {...routerProps} onSettingsChange={this.handleEmailChange}/>} />
          <Route path="/user" render={routerProps => <User {...routerProps} gravatar = {this.state.email}/>} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/admin" component={Admin} />
          <Redirect to="/settings" />
        </Switch>
      </div>
    );
  }
}

export default App;
