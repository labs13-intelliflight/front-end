import React, { Component } from "react";
import "./App.css";
import Landing from "../src/components/landing/landing"

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  // logout() {
  //   this.props.auth.logout();
  // }


  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
