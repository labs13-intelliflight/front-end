import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline,
  InfoWindow
} from "react-google-maps";
import { GoogleComponent } from "react-google-location";
import mapStyles from "./mapStyles";
import Axios from "axios";
// functions import
import WeatherIcon from "./functions/weather-icon.js";
import IcingIcon from "./functions/icing.js";
import TurbIcon from "./functions/turbulence.js";
import distance from "./functions/distance-calculator";

import FormDialog from "../materialUI/formdialog";

// Set global variables for start and destination

let start;
let destination;
// let selectedPirep;

class PirepMap extends React.Component {
  state = {
    pirepData: [],
    start: "",
    destination: "",
    selectedPirep: ""
  };

  componentDidMount() {
    Axios.get("https://intelliflight-api.onrender.com/api/pireps")
      .then(res => {
        this.setState({
          pirepData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  submitFlightPlan = event => {
    event.preventDefault();
    this.setState({
      start: start,
      destination: destination
    });
  };

  onClickMarker = (event, pirep) => {
    // event.preventDefault();
    this.setState({
      selectedPirep: pirep
    });
  };

  StartMarker = () => {
    if (this.state.start.coordinates) {
      return (
        <Marker
          position={{
            lat: this.state.start.coordinates.lat,
            lng: this.state.start.coordinates.lng
          }}
          label={{
            float: "left",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            text: "A"
          }}
        />
      );
    } else {
      return "";
    }
  };
  DestinationMarker = () => {
    if (this.state.destination) {
      return (
        <Marker
          position={{
            lat: this.state.destination.coordinates.lat,
            lng: this.state.destination.coordinates.lng
          }}
          label={{
            float: "left",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            text: "B"
          }}
        />
      );
    } else {
      return "";
    }
  };

  // Creates Google map

  Map = () => {
    return (
      <div>
        <GoogleMap
          defaultZoom={4}
          defaultCenter={{ lat: 40.7306, lng: -73.9352 }}
          defaultOptions={{ styles: mapStyles }}
        >
          {this.state.pirepData.map(pirep => (
            <Marker
              key={pirep.id}
              position={{
                lat: pirep.latitude,
                lng: pirep.longitude
              }}
              icon={{
                url:
                  TurbIcon(pirep.turbulence) ||
                  IcingIcon(pirep.icing) ||
                  WeatherIcon(pirep.weather),
                scaledSize: new window.google.maps.Size(30, 40)
              }}
              label={{
                float: "left",
                color: "black",
                fontWeight: "bold",
                fontSize: "12px",
                text: pirep.altitude,
                background: "white",
                margin: "10px"
              }}
              // onClick={event => {
              //   event.preventDefault();
              //   this.setState({
              //     selectedPirep : pirep
              //   })
              // }}
              onClick={event => {
                this.onClickMarker(event, pirep);
                console.log(pirep);
              }}
            />
          ))}

          {this.StartMarker()}
          {this.DestinationMarker()}
          {this.state.start && this.state.destination && (
            <Polyline
              path={[
                {
                  lat: this.state.start.coordinates.lat,
                  lng: this.state.start.coordinates.lng
                },
                {
                  lat: this.state.destination.coordinates.lat,
                  lng: this.state.destination.coordinates.lng
                }
              ]}
              geodesic={true}
              options={{
                strokeColor: "#ff2527",
                strokeOpacity: 0.75,
                strokeWeight: 5
              }}
            />
          )}
          {this.state.selectedPirep && (
            <InfoWindow
              position={{
                lat: this.state.selectedPirep.latitude,
                lng: this.state.selectedPirep.longitude
              }}
            >
              <div>
                <p>Report</p>
                <p>Altitude: {this.state.selectedPirep.altitude}00 feet</p>
                <p>Latitude: {this.state.selectedPirep.latitude}</p>
                <p>Longitude: {this.state.selectedPirep.longitude} </p>
                <p>Turbulence: {this.state.selectedPirep.turbulence}</p>
                <p>Icing: {this.state.selectedPirep.icing}</p>
                <p>Description: {this.state.selectedPirep.description}</p>
                
                <p>
                  Weather:
                  <img
                    alt=""
                    src={WeatherIcon(this.state.selectedPirep.weather)}
                  />
                </p><p> Created At: {this.state.selectedPirep.created_at}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    );
  };

  // Google Map configuration

  TestMap = () => {
    const MapWrapped = withScriptjs(withGoogleMap(this.Map));

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_KEY
          }`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  };

  // distance function if else

  calculatedDistance = () => {
    if (this.state.start && this.state.destination) {
      return (
        <div>
          <h1>Total Miles:</h1>
          {Math.ceil(
            distance(
              this.state.start.coordinates.lat,
              this.state.start.coordinates.lng,
              this.state.destination.coordinates.lat,
              this.state.destination.coordinates.lng,
              "N"
            )
          )}
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        {" "}
        {/* Renders Google Map */}
        {this.TestMap()}
        <div className="top-content">
          <div className="plan-distance flightDiv">
            {/* Flight plan submission form */}
            {/* <h4>Plan Your Flight</h4> */}
            <form onSubmit={this.submitFlightPlan}>
              <p className="plan-label">Starting Point</p>
              <GoogleComponent
                apiKey={process.env.REACT_APP_GOOGLE_KEY}
                language={"en"}
                coordinates={true}
                locationBoxStyle={"custom-style"}
                locationListStyle={"custom-style-list"}
                onChange={event => {
                  start = event;
                }}
              />
              <p className="plan-label">Destination</p>
              <GoogleComponent
                apiKey={process.env.REACT_APP_GOOGLE_KEY}
                language={"en"}
                coordinates={true}
                locationBoxStyle={"custom-style"}
                locationListStyle={"custom-style-list"}
                onChange={event => {
                  destination = event;
                }}
              />
              <button>Submit</button>
            </form>

            {/* will display distance */}

            {this.calculatedDistance()}
          </div>
        </div>
        <div className="pirep">
          <FormDialog />
        </div>
      </div>
    );
  }
}

export default PirepMap;
