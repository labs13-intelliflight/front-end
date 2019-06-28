import React from "react";
import { Link } from "react-router-dom";
import "../about/about.css";
import IntelliflightLogoWhite from "../../images/intelliflight-logo v1.png";

import IrvingPic from "../about/profilePics/irvingPic.jpg";
import JarradPic from "../about/profilePics/jarradPic.png";
import MarioPic from "../about/profilePics/marioPic.png";
import StevePic from "../about/profilePics/stevePic.jpeg";
import JefferyPic from "../about/profilePics/jefferyPic.png";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="addMargin">
          <div className="nav-container">
            <div className="header-container1">
              <div className="headerSpace" >
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
                <Link to="/" className="about">
                  HOME
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

        <div className="titleDiv">
          <h1 className="aboutTitle">The IntelliFlight Crew</h1>
        </div>

        <div className="section2">
          <div className="members-container">
            <div className="member">
              <div className="figure">
                <img className="figure" src={IrvingPic} alt="Irving" />
              </div>
              <h3 className="name">Irving Duran</h3>
              <h5 className="position">Full-Stack Web Developer</h5>
            </div>

            <div className="member">
              <div className="figure">
                <img className="figure" src={JarradPic} alt="Jarrad" />
              </div>
              <h3 className="name">Jarrad Miller</h3>
              <h5 className="position">Full-Stack Web Developer</h5>
            </div>

            <div className="member">
              <div className="figure">
                <img className="figure" src={MarioPic} alt="Mario" />
              </div>
              <h3 className="name">Mario Amaya</h3>
              <h5 className="position">Full-Stack Web Developer</h5>
            </div>

            <div className="member">
              <div className="figure">
                <img className="figure" src={StevePic} alt="Steve" />
              </div>
              <h3 className="name">Steve Lanier</h3>
              <h5 className="position">Full-Stack Web Developer</h5>
            </div>

            <div className="member">
              <div className="figure">
                <img className="figure" src={JefferyPic} alt="Jeffery" />
              </div>
              <h3 className="name">Jeffery Wicks</h3>
              <h5 className="position">UX Designer</h5>
            </div>
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

export default About;
