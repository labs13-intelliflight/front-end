import React, { Component } from "react";
import axios from "axios";
import WeatherIcon from "../map/functions/weather-icon.js";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altitude: null,
      turbulence: null,
      icing: null,
      weather: null,
      description: null,
      latitude: "",
      longitude: ""
    };
  }

  addPirep = e => {
    e.preventDefault();
    axios
      .post("https://intelliflightapp.herokuapp.com/api/pireps/", this.state)
      .then(res => {
        this.setState({ post: res.data });
        console.log(res)
        alert("Thank you for posting a report")
      }).then(() => {
          this.props.updatePireps();
        })
      .catch(err => {
        console.log(err);
        alert(err)
      });
    this.setState({
      altitude: null,
      turbulence: null,
      icing: null,
      weather: null,
      description: null,
      latitude: "",
      longitude: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // console.log("turbulence:", this.state.turbulence );
    // console.log( "icing:", this.state.icing );
    // console.log("weather:", this.state.weather );
    // console.log("lat:", this.state.latitude);
    // console.log("long:", this.state.longitude)

    return (
      <div>
        {/* <h1>Submit Pirep</h1> */}
        <form onSubmit={this.addPirep}>
          <div className="altitude">
            <label htmlFor="altitude" className="altitude-label">
              Altitude
            </label>
            <input
              id="altitude"
              value={this.state.altitude}
              onChange={this.handleChange}
              name="altitude"
            />
          </div>
          <div className="form-flex">
            <div className="turbulence form-column">
              <h1>Turbulence</h1>
              <div>
                <input
                  id="nil-turbulence"
                  type="radio"
                  value="nil"
                  check={this.state.turbulence === "nil"}
                  onChange={this.handleChange}
                  name="turbulence"
                  placeholder="turbulence"
                />
                <label htmlFor="nil-turbulence">NIL</label>
              </div>
              <div>
                <input
                  id="smooth-light-turbulence"
                  type="radio"
                  value="smooth-light"
                  check={this.state.turbulence === "smooth-light"}
                  onChange={this.handleChange}
                  name="turbulence"
                  placeholder="turbulence"
                />
                <label htmlFor="smooth-light-turbulence">Smooth-Light</label>
              </div>
              <div>
                <input
                  id="light-turbulence"
                  type="radio"
                  value="light"
                  check={this.state.turbulence === "light"}
                  onChange={this.handleChange}
                  name="turbulence"
                  placeholder="turbulence"
                />
                <label htmlFor="light-turbulence">Light</label>
              </div>
              <div>
                <input
                  id="light-moderate-turbulence"
                  type="radio"
                  value="light-moderate"
                  check={this.state.turbulence === "light-moderate"}
                  onChange={this.handleChange}
                  name="turbulence"
                  placeholder="turbulence"
                />
                <label htmlFor="light-moderate-turbulence">
                  Light-Moderate
                </label>
              </div>

              <div>
                <input
                  id="moderate-turbulence"
                  type="radio"
                  value="moderate"
                  check={this.state.turbulence === "moderate"}
                  onChange={this.handleChange}
                  name="turbulence"
                  placeholder="turbulence"
                />
                <label htmlFor="moderate-turbulence">Moderate</label>
              </div>
              <div>
                <input
                  id="moderate-severe-turbulence"
                  type="radio"
                  value="moderate-severe"
                  check={this.state.turbulence === "moderate-severe"}
                  onChange={this.handleChange}
                  name="turbulence"
                  placeholder="turbulence"
                />
                <label htmlFor="moderate-severe-turbulence">
                  Moderate-Severe
                </label>
              </div>
              <div>
                <input
                  id="severe-turbulence"
                  type="radio"
                  value="severe"
                  check={this.state.turbulence === "severe"}
                  onChange={this.handleChange}
                  name="turbulence"
                  placeholder="turbulence"
                />
                <label htmlFor="severe-turbulence">Severe</label>
              </div>
              <div>
                <input
                  id="extreme-turbulence"
                  type="radio"
                  value="extreme"
                  check={this.state.turbulence === "extreme"}
                  onChange={this.handleChange}
                  name="turbulence"
                  placeholder="turbulence"
                />
                <label htmlFor="extreme-turbulence">Extreme</label>
              </div>
            </div>

            {/* ******************************************************************************************* */}

            <div className="icing form-column left-border">
              <h1>Icing</h1>
              <div>
                <input
                  id="nil-icing"
                  type="radio"
                  value="nil"
                  check={this.state.icing === "nil"}
                  onChange={this.handleChange}
                  name="icing"
                  placeholder="icing"
                />
                <label htmlFor="nil-icing">NIL</label>
              </div>
              <div>
                <input
                  id="trace-icing"
                  type="radio"
                  value="trace"
                  check={this.state.icing === "trace"}
                  onChange={this.handleChange}
                  name="icing"
                  placeholder="icing"
                />
                <label htmlFor="trace-icing">Trace</label>
              </div>
              <div>
                <input
                  id="trace-light-icing"
                  type="radio"
                  value="trace-light"
                  check={this.state.icing === "trace-light"}
                  onChange={this.handleChange}
                  name="icing"
                  placeholder="icing"
                />
                <label htmlFor="trace-light-icing">Trace-Light</label>
              </div>
              <div>
                <input
                  id="light-icing"
                  type="radio"
                  value="light"
                  check={this.state.icing === "light"}
                  onChange={this.handleChange}
                  name="icing"
                  placeholder="icing"
                />
                <label htmlFor="light-icing">Light</label>
              </div>
              <div>
                <input
                  id="light-moderate-icing"
                  type="radio"
                  value="light-moderate"
                  check={this.state.icing === "light-moderate"}
                  onChange={this.handleChange}
                  name="icing"
                  placeholder="icing"
                />
                <label htmlFor="light-moderate-icing">Light-Moderate</label>
              </div>
              <div>
                <input
                  id="moderate-icing"
                  type="radio"
                  value="moderate"
                  check={this.state.icing === "moderate"}
                  onChange={this.handleChange}
                  name="icing"
                  placeholder="icing"
                />
                <label htmlFor="moderate-icing">Moderate</label>
              </div>
              <div>
                <input
                  id="moderate-severe-icing"
                  type="radio"
                  value="moderate-severe"
                  check={this.state.icing === "moderate-severe"}
                  onChange={this.handleChange}
                  name="icing"
                  placeholder="icing"
                />
                <label htmlFor="moderate-severe-icing">Moderate-Severe</label>
              </div>
              <div>
                <input
                  id="severe-icing"
                  type="radio"
                  value="severe"
                  check={this.state.icing === "severe"}
                  onChange={this.handleChange}
                  name="icing"
                  placeholder="icing"
                />
                <label htmlFor="severe-icing">Severe</label>
              </div>
            </div>
          </div>

          {/* weather icons */}
          <div className="weather">
            <h1>Weather</h1>
            <div className="weather-flex">
              <div className="weather-column">
                <div className="weather-background">
                  <input
                    id="weather1"
                    type="radio"
                    value="1"
                    check={this.state.weather === "1"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather1">
                    <img src={WeatherIcon(1)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather2"
                    type="radio"
                    value="2"
                    check={this.state.weather === "2"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather2">
                    <img src={WeatherIcon(2)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather3"
                    type="radio"
                    value="3"
                    check={this.state.weather === "3"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather3">
                    <img src={WeatherIcon(3)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather4"
                    type="radio"
                    value="4"
                    check={this.state.weather === "4"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather4">
                    <img src={WeatherIcon(4)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather5"
                    type="radio"
                    value="5"
                    check={this.state.weather === "5"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather5">
                    <img src={WeatherIcon(5)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather6"
                    type="radio"
                    value="6"
                    check={this.state.weather === "6"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather6">
                    <img src={WeatherIcon(6)} alt="" />
                  </label>
                </div>
              </div>

              <div className="weather-column">
                <div className="weather-background">
                  <input
                    id="weather7"
                    type="radio"
                    value="7"
                    check={this.state.weather === "7"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather7">
                    <img src={WeatherIcon(7)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather8"
                    type="radio"
                    value="8"
                    check={this.state.weather === "8"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather8">
                    <img src={WeatherIcon(8)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather9"
                    type="radio"
                    value="9"
                    check={this.state.weather === "9"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather9">
                    <img src={WeatherIcon(9)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather10"
                    type="radio"
                    value="10"
                    check={this.state.weather === "10"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather10">
                    <img src={WeatherIcon(10)} alt="" />
                  </label>
                </div>

                <div className="weather-background">
                  <input
                    id="weather11"
                    type="radio"
                    value="11"
                    check={this.state.weather === "11"}
                    onChange={this.handleChange}
                    name="weather"
                    placeholder="weather"
                  />
                  <label htmlFor="weather11">
                    <img src={WeatherIcon(11)} alt="" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* additional form inputs */}

          <div className="bottom-form-inputs">
            <div className="description">
              <label htmlFor="description">Description</label>
              <input
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
                name="description"
              />
            </div>

            <div className="latitude">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                value={this.state.latitude.toString()}
                onChange={this.handleChange}
                name="latitude"
              />
            </div>
            <div className="longitude">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                value={this.state.longitude.toString()}
                onChange={this.handleChange}
                name="longitude"
              />
            </div>
          </div>
          <button className="submit-btn-style" onClick={this.props.handleClose}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}
