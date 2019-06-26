import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import intelliflightLogoWhite from "../images/intelliflight-logo v1.png";

class Login extends Component {
  render() {
    return (
      <div className="container"> 
                <div className="page-border">
                <Navbar className="nav-bar">
                <div>
                  <Navbar.Brand className="top-logo">
                    <img src={intelliflightLogoWhite} className="white-wings" alt=""/>
                    <p className="logo-title">IntelliFlight</p>
                  </Navbar.Brand>
                  
                
                        <Button
                          id="qsLoginBtn"
                          bsstyle="primary"
                          className="btn-margin"
                          onClick={this.props.login}
                        >
                          Log In
                        </Button>
                  {/* {
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
                  } */}
                </div>
              </Navbar>
              </div>
              </div>
    )}
  }

export default Login
