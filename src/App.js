import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Settings from './Settings';
import User from './User';
import Dashboard from './Dashboard';
import Admin from './Admin';



const Navigation = (props) => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/settings'>Settings</Link></li>
    <li><Link to='/user'>User</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    <li><Link to='/admin'>Admin</Link></li>
    </ul>
);

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
