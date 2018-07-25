import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import User from './User';
import Settings from './Settings';
import Dashboard from './Dashboard';



const Navigation = (props) => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/user'>User</Link></li>
    <li><Link to='/settings'>Settings</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
);

class App extends Component {
  render() {
    return (
          <div className="App-container">
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
          <Route path='/settings' component={Settings} />
          <Route path='/dashboard' component={Dashboard} />
          </div>
    );
  }
}

export default App;
