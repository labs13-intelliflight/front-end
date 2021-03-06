import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from '../../App';
import Home from './Home';
import Callback from '../Auth0/Callback/Callback';
import Auth from '../Auth0/Auth';
import history from '../Auth0/history';
import About from '../about/about'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route path="/about" component={About} />
        </div>
      </Router>
  );
}

export default makeMainRoutes;
