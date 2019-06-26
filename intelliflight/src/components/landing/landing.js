import React from "react";
import { Link } from "react-router-dom";
import "../landing/landing.css";
import IntelliflightLogoWhite from "../../images/intelliflight-logo v1.png";
import planePicture from "../landing/landingPics/planewing.png";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="addMargin">
          <div className="nav-container">
            <div className="header-container1">
              <a className="headerSpace" href="index.html">
                <img
                  className="banner"
                  alt="main logo"
                  src={IntelliflightLogoWhite}
                />
                <h1 className="banner-words">IntelliFlight</h1>
              </a>
            </div>
            <div className="orangeNav">
              <div className="nav-text-left">
                <Link to="/about" className="about">
                  ABOUT
                </Link>
              </div>
              <div id="buttons" className="nav-text-right">
                <Link to="/home" className="login">
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bigPic">
          <img src={planePicture} class="planePic" alt="big plane" />
        </div>
        <div className="placementPara">
          <div className="heroContainer">
            <h1 className="heroText1">Create flight plans in seconds</h1>
            <p className="heroText2">
              Keep track of weather events with real-time pilot report updates
            </p>
            <button className="heroButton">Sign Up</button>
          </div>
        </div>

        <div className="whiteBack">
          <div className="midContent">
            <div className="topCard">
              <p className="reviewWord">
                "The user interface is so intuitive and fun to use"
                <br /> Jackie Smith
              </p>
            </div>
            <div className="bottomCard">
              <p className="reviewWord">
                "I was able to create my first flight plan with no tutorial
                help" <br />
                Tommy John
              </p>
            </div>
          </div>
        </div>

        <div className="greyBack">
          <h1 className="bottomTitle">Simpliflied flight planning strategy</h1>
          <div className="bottomCards">
            <div className="card">
              <img />
              <h3 className="boldTitle">Easy to use</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies massa risus, a cursus tortor malesuada id.
                In eget quam id sapien tincidunt tempus sed nec est. In a congue
                turpis. Morbi tristique sit amet neque id blandit.
              </p>
            </div>

            <div className="card">
              <img />
              <h3 className="boldTitle">Pirep updates</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies massa risus, a cursus tortor malesuada id.
                In eget quam id sapien tincidunt tempus sed nec est. In a congue
                turpis. Morbi tristique sit amet neque id blandit.
              </p>
            </div>

            <div className="card">
              <img />
              <h3 className="boldTitle">Flexible feature list</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies massa risus, a cursus tortor malesuada id.
                In eget quam id sapien tincidunt tempus sed nec est. In a congue
                turpis. Morbi tristique sit amet neque id blandit.
              </p>
            </div>
          </div>
        <button className="bottomButton">Sign Up</button>
        </div>

      </div>
    );
  }
}

export default Landing;
