import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/user" component={User} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/admin" component={Admin} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
