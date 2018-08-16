import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Settings from './pages/Settings';
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';





class App extends Component {
  render() {
    return (
          <div className="App-container">
          
          <Route exact path='/' component={Home} />
          <Route path='/settings' component={Settings} />
          <Route path='/user' component={User} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/admin' component={Admin} />
          </div>
    );
  }
}

export default App;
