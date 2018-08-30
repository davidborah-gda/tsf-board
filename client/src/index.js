import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Using BrowserRouter unless Pre HTML5 is needed, then back to HashRouter

ReactDOM.render(
  <BrowserRouter> 
      <App />
  </BrowserRouter>
  , document.getElementById('root')
);

