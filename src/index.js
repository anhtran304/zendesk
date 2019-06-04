import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Header from './layouts/Header';
serviceWorker.unregister();

const routing = (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));