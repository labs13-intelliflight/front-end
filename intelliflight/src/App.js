import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./App.css";
import intelliflightLogoWhite from "../src/images/intelliflight-logo v1.png";
import PirepMap from "./components/map/map.js";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {!localStorage.getItem("isLoggedIn") && (
          <div className="page-border">
          <Navbar className="nav-bar">
          <div>
            <Navbar.Brand className="top-logo">
              <img src={intelliflightLogoWhite} className="white-wings" alt=""/>
              <p className="logo-title">IntelliFlight</p>
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
        </div>
      )}
      <div className="example">
          <h1>Intelliflight</h1>
      </div>
        <PirepMap />
      </div>
    );
  }
}

export default App;
