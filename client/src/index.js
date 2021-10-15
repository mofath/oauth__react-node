import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
