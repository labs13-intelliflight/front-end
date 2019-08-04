import React, { Component } from "react";
import "./App.css";
import Landing from "../src/components/landing/landing"
import PirepMap from './components/map/map'
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
<<<<<<< HEAD
        {/* <Landing/> */}
<PirepMap/> 
=======
        <Landing/>
 {/* <PirepMap/> */}
>>>>>>> 3adf461da64f9a5541025929a2ad670d1ba26e96
      </div>
    );
  }
}

export default App;
