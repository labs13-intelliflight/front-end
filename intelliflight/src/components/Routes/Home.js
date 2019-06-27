import React, { Component } from "react";
import PirepMap from "../map/map";
import Login from "../Login"

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div >
         
        {isAuthenticated() && (
          <div>
           <PirepMap />
          </div>
        )}
       
        {!isAuthenticated() && (
          <Login login={this.login.bind(this)}/>
        )}
      </div>
    );
  }
}

export default Home
