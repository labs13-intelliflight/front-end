import React, { Component } from "react";
import "./App.css";

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
        <h1>Hello, World</h1>/>
      </div>
    );
  }
}

export default App;
