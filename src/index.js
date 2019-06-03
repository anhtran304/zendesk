import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
// import NotFound from './pages/NotFound';
// import LogIn from './pages/LogIn';
import Header from './layouts/Header';
// import Authentication from './components/Authentication';

// import AdminHome from './pages/AdminHome';

serviceWorker.unregister();

const routing = (
  <Router>
    <div>
      <Header/>
      {/* if login will show menu, if not will redirect to login */}
      <Switch>
        {/* <Route exact path="/login" component={LogIn} /> */}
        {/* <Route exact path="/" component={Authentication(AdminHome, "Admin")} /> */}

        {/* Router for Admin */}
        {/* <Route exact path="/admins" component={Authentication(AdminHome, "Admin")}/> */}

        <Route path="/" component={App} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));