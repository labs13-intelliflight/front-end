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
      .post("https://intelliflight-api.onrender.com/api/pireps/", this.state)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(err => {
        console.log(err);
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
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log("turbulence:", this.state.turbulence);
    console.log("icing:", this.state.icing);
    console.log("weather:", this.state.weather);

    return (
      <div>
        <h1>Submit Pirep</h1>
        <form onSubmit={this.addPirep}>
          <div>
            <input
              value={this.state.altitude}
              onChange={this.handleChange}
              name="altitude"
              placeholder="altitude"
            />
          </div>
          <div className="turbulence">
            <h1>Turbulence</h1>
            <input
              type="radio"
              value="nil"
              check={this.state.turbulence === "nil"}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
            NIL
            <input
              type="radio"
              value="smooth-light"
              check={this.state.turbulence === "smooth-light"}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
            Smooth-Light
            <input
              type="radio"
              value="light"
              check={this.state.turbulence === "light"}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
            Light
            <input
              type="radio"
              value="light-moderate"
              check={this.state.turbulence === "light-moderate"}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
            Light-Moderate
            <input
              type="radio"
              value="moderate"
              check={this.state.turbulence === "moderate"}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
            Moderate
            <input
              type="radio"
              value="moderate-severe"
              check={this.state.turbulence === "moderate-severe"}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
            Moderate-Severe
            <input
              type="radio"
              value="severe"
              check={this.state.turbulence === "severe"}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
            Severe
            <input
              type="radio"
              value="extreme"
              check={this.state.turbulence === "extreme"}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
            Extreme
          </div>
          {/* ******************************************************************************************* */}
          <div className="icing">
            <h1>Icing</h1>
            <input
              type="radio"
              value="nil"
              check={this.state.icing === "nil"}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
            NIL
            <input
              type="radio"
              value="trace"
              check={this.state.icing === "trace"}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
            Trace
            <input
              type="radio"
              value="trace-light"
              check={this.state.icing === "trace-light"}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
            Trace-Light
            <input
              type="radio"
              value="light"
              check={this.state.icing === "light"}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
            Light
            <input
              type="radio"
              value="light-moderate"
              check={this.state.icing === "light-moderate"}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
            Light-Moderate
            <input
              type="radio"
              value="moderate"
              check={this.state.icing === "moderate"}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
            Moderate
            <input
              type="radio"
              value="moderate-severe"
              check={this.state.icing === "moderate-severe"}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
            Moderate-Severe
            <input
              type="radio"
              value="severe"
              check={this.state.icing === "severe"}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
            Severe
          </div>

          {/* weather icons */}
          <div className="weather">
            <h1>Weather</h1>
            <input
              type="radio"
              value="1"
              check={this.state.weather === "1"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(1)} alt="" />

            <input
              type="radio"
              value="2"
              check={this.state.weather === "2"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(2)} alt="" />

            <input
              type="radio"
              value="3"
              check={this.state.weather === "3"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(3)} alt="" />

            <input
              type="radio"
              value="4"
              check={this.state.weather === "4"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(4)} alt="" />

            <input
              type="radio"
              value="5"
              check={this.state.weather === "5"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(5)} alt="" />

            <input
              type="radio"
              value="6"
              check={this.state.weather === "6"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(6)} alt="" />

            <input
              type="radio"
              value="7"
              check={this.state.weather === "7"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(7)} alt="" />

            <input
              type="radio"
              value="8"
              check={this.state.weather === "8"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(8)} alt="" />

            <input
              type="radio"
              value="9"
              check={this.state.weather === "9"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(9)} alt="" />

            <input
              type="radio"
              value="10"
              check={this.state.weather === "10"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(10)} alt="" />

            <input
              type="radio"
              value="11"
              check={this.state.weather === "11"}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
            <img src={WeatherIcon(11)} alt="" />
          </div>
          <div className="description">
            <input
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              placeholder="description"
            />
          </div>
          <div className="latitude">
            <input
              value={this.state.latitude.toString()}
              onChange={this.handleChange}
              name="latitude"
              placeholder="latitude"
            />
          </div>
          <div className="longitude">
            <input
              value={this.state.longitude.toString()}
              onChange={this.handleChange}
              name="longitude"
              placeholder="longitude"
            />
          </div>
          <button>post</button>
        </form>
      </div>
    );
  }
}
