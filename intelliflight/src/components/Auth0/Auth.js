import history from './history';
import auth0 from 'auth0-js';
import jwtDecode from "jwt-decode";
import axios from "axios";

import getExpiresAtLocalStorage from './middleware';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    // domain: AUTH_CONFIG.domain,
    domain: process.env.REACT_APP_DOMAIN,
    // clientID: AUTH_CONFIG.clientId,
    clientID: process.env.REACT_APP_CLIENT_ID,
    // redirectUri: AUTH_CONFIG.callbackUrl,
    redirectUri: process.env.REACT_APP_CALLBACK_URL,
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
  
    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

     // Set auth items in localStorage
     localStorage.setItem('isLoggedIn', 'true');
     localStorage.setItem('access_token', authResult.accessToken);
     localStorage.setItem('id_token', authResult.idToken);
     localStorage.setItem('expires_at', expiresAt);

    const decoded = jwtDecode(localStorage.id_token && localStorage.id_token);
    const user = {
      email: decoded.email
    };
    
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.id_token}`
      }
    };

    axios.post('https://intelliflightapp.herokuapp.com/auth/register', user, config)
      .then(res => { 
        console.log(res.data)
       })
      .catch(err => { 
        console.log(err.response)
       })

      // navigate to the home route
      history.replace('/home');
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    this.auth0.logout({
      returnTo: window.location.origin
    });

    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    let expiresAt;
    // Check whether the current time is past the
    // access token's expiry time
    if (getExpiresAtLocalStorage()) {
      expiresAt = getExpiresAtLocalStorage();
    } else {
      expiresAt = this.expiresAt;
    }
    return new Date().getTime() < expiresAt;
  }
}