import React, { Component } from "react";
import PirepMap from "../map/map";

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
            <h4>You are logged in!</h4>
            {/* <div>Intelliflight map</div> */}
           <PirepMap />
          </div>
        )}
       
        {!isAuthenticated() && (
          <h4>
            You are not logged in! Please{" "}
            <button
              style={{ cursor: "pointer" }}
              onClick={this.login.bind(this)}
            >
              Log In
            </button>{" "}
            to continue.
          </h4>
        )}
      </div>
    );
  }
}

export default Home;
