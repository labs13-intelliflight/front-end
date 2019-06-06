import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/Stripe/CheckoutForm';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar className="nav-bar">
          <div>
            <Navbar.Brand>
              <p>IntelliFlight</p>
            </Navbar.Brand>
            <Button
              bsstyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsstyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsstyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </div>
        </Navbar>
        <StripeProvider apiKey={`process.env.REACT_APP_STRIPE_KEY`}>
        <div className="example">
          <h1>Intelliflight</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      </div>
    );
  }
}

export default App;