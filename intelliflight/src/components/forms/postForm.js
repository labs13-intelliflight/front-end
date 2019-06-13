import React, { Component } from "react";
import axios from "axios";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altitude: null,
      turbulence: null,
      icing: null,
      weather: null,
      description: null,
      latitude: null,
      longitude: null
    };
  }

  addPirep = e => {
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
      latitude: null,
      longitude: null
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addPirep}>
          <div>
            <input
              value={this.state.altitude}
              onChange={this.handleChange}
              name="altitude"
              placeholder="altitude"
            />
          </div>
          <div>
            <input
              value={this.state.turbulence}
              onChange={this.handleChange}
              name="turbulence"
              placeholder="turbulence"
            />
          </div>
          <div>
            <input
              value={this.state.icing}
              onChange={this.handleChange}
              name="icing"
              placeholder="icing"
            />
          </div>
          <div>
            <input
              value={this.state.weather}
              onChange={this.handleChange}
              name="weather"
              placeholder="weather"
            />
          </div>
          <div>
            <input
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              placeholder="description"
            />
          </div>
          <div>
            <input
              value={this.state.latitude}
              onChange={this.handleChange}
              name="latitude"
              placeholder="latitude"
            />
          </div>
          <div>
            <input
              value={this.state.longitude}
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
