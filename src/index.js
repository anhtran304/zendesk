import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './layouts/Header';
import TicketList from './pages/TicketList';
import TicketDetail from './pages/TicketDetail';

serviceWorker.unregister();

const routing = (
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/tickets" component={TicketList} />
      <Route path="/tickets/:id" render={(props) => <TicketDetail {...props} />}/> 
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));