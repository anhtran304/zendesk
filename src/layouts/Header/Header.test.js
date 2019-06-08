import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index.js';

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Header />
    </Router>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});