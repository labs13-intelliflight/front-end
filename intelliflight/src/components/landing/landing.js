import React from "react";
import { Link } from "react-router-dom";
import "../landing/landing.css";
import IntelliflightLogoWhite from "../../images/intelliflight-logo v1.png";

import planePic from "../landing/landingPics/planewing.png";
import iPad from "./landingPics/new image.png";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <img className="bigPic" alt="planeWing"src={planePic} />

        <div className="addMargin">
          <div className="nav-container">
            <div className="header-container1">
              <div className="headerSpace" href="index.html">
                <img
                  className="banner"
                  alt="main logo"
                  src={IntelliflightLogoWhite}
                />
                <h1 className="banner-words">IntelliFlight</h1>
              </div>
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

        <div className="planeSection">
          <div className="heroContainer">
            <h1 className="heroText1">Create flight plans in seconds</h1>
            <p className="heroText2">
              Keep track of weather events with real-time pilot report updates
            </p>
            <Link to="/home" className="heroButton">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="whiteBack">
          <div className="ipadSim">
            <img className="ipad" alt="iPad" src={iPad} />
          </div>
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
            <div className="card1">
              <h3 className="boldTitle">Create and view Pirep reports</h3>
              <p>
                Using our Application, we allow you to report your previous
                flights. You can record things like: Icing, Turbulence,
                Altitude, Longitude, Latitude, and Weather. You can also view
                other Pireps reported by other pilots all over the world.
              </p>
            </div>

            <div className="card2">
              <h3 className="boldTitle">Plan your Flight</h3>
              <p>
                Using our app, you can plan a flight by searching for your
                Airport and destination. It will then show you on the map the
                quickest route, and it will show you the distance in miles
                between those points.
              </p>
            </div>
          </div>
          <div className="btnContainer">
            <Link to="/home" className="bottomButton">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="blueFooter">
          <div className="madeBy">
            <p className="">
              Made by{" "}
              <Link to="/about" className="underline">
              IntelliFlight
            </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
