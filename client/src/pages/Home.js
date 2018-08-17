import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';


const Home = (props) => (
    <div className="Home-container">
      <form>
      <h4>Please enter your email address to get started!</h4>
      <input className="Email-input" placeholder="hello@company.com" />
      <Link to='/settings'><button type="submit" className="TSF-button">Enter</button></Link>
      </form>
    </div>
)

export default Home;