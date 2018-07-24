import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import './App.css';

const Navigation = (props) => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/user'>User</Link></li>
    <li><Link to='/settings'>Settings</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
);

// route: '/'
const Home = (props) => (
  <section>This is the TSF Homepage.</section>
);

// route: '/user'
const User = (props) => (
  <section>This is where you can keep track of your desired metrics. Click buttons below to increase your metrics during the selling blitz.</section>
);

// route: '/settings'
const Settings = (props) => (
  <section>This is where you can choose which metrics are important to you! Show the metrics you want and hide the ones you don't!</section>
);

// route: '/dashboard'
const Dashboard = (props) => (
  <section>Main TSF Selling Blitz Dashboard.</section>
);


class App extends Component {
  render() {
    return (
          <div>
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
