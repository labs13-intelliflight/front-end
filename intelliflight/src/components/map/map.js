import React, { useState } from "react";
// importing moment for time formating
import moment from "moment";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline,
  InfoWindow
} from "react-google-maps";
import Button from "@material-ui/core/Button";
import mapStyles from "./mapStyles";
import Axios from "axios";
// functions import
import {
  FlightLevel,
  Altitude,
  distance,
  WeatherIcon,
  TurbIcon,
  IcingIcon
} from "./functions/export.js";

import FormDialog from "../materialUI/formdialog";
import FlightPlanFormDialog from "../materialUI/flightplanFormDialog";
import PIREPHistoryInput from "../forms/PIREPHistoryInput";
import MenuListComposition from "../materialUI/menu";

class PirepMap extends React.Component {
  state = {
    pirepData: [],
    start: "",
    destination: "",
    hourWindow: 2
  };

  componentDidMount() {
    Axios.get("https://intelliflightapp.herokuapp.com/api/pireps")
      .then(res => {
        this.setState({
          pirepData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Update PIREP Markers

  updatePireps = () => {
    Axios.get("https://intelliflightapp.herokuapp.com/api/pireps")
      .then(res => {
        this.setState({
          pirepData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Set Starting and Destination Points for Flight Path

  submitFlightPlan = event => {
    event.preventDefault();
    this.setState({
      start: JSON.parse(localStorage.getItem("start")),
      destination: JSON.parse(localStorage.getItem("destination"))
    });
  };

  // Update hourWindow for PIREP History Display

  updateHourWindow = hours => {
    this.setState({
      hourWindow: hours
    });
  };

  // functions for flight markers
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
          options={{
            zIndex: 1000
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
          options={{
            zIndex: 1000
          }}
        />
      );
    } else {
      return "";
    }
  };

  // Creates Google map
  checkIcon = weather => {
    if (weather === null || weather === 0) {
      return "";
    } else {
      return (
        <p className="weather-tag">
          <strong>Weather:</strong>
          <img alt="weather icon" src={WeatherIcon(weather)} />
        </p>
      );
    }
  };
  checkDescription = des => {
    if (des === "" || des === null) {
      return "";
    } else {
      return (
        <p>
          <strong>Description:</strong> {des}
        </p>
      );
    }
  };
  checkTurbulence = turb => {
    if (turb === "" || turb === null) {
      return "";
    } else {
      return (
        <p>
          <strong>Turbulence:</strong> {turb}
        </p>
      );
    }
  };

  checkIcing = icing => {
    if (icing === "" || icing === null) {
      return "";
    } else {
      return (
        <p>
          <strong>Icing:</strong> {icing}
        </p>
      );
    }
  };

  Map = () => {
    // adding hooks
    const [selectedPirep, setSelectedPirep] = useState(null);

    return (
      <div>
        <GoogleMap
          defaultZoom={4}
          defaultCenter={
            this.state.start
              ? {
                  lat: this.state.start.coordinates.lat,
                  lng: this.state.start.coordinates.lng
                }
              : { lat: 40.7128, lng: -74.006 }
          }
          defaultOptions={{ styles: mapStyles }}
        >
          {this.state.pirepData.map((pirep, i) => {
            let date = new Date();
            date.setHours(date.getHours() - this.state.hourWindow);

            return (
              pirep.created_at >= date.toISOString() && (
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
                    text: FlightLevel(pirep.altitude),
                    background: "white",
                    margin: "10px"
                  }}
                  onClick={() => {
                    setSelectedPirep(pirep);
                  }}
                  options={{
                    zIndex: i
                  }}
                />
              )
            );
          })}

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
                strokeColor: "#FAA632",
                strokeOpacity: 0.75,
                strokeWeight: 5
              }}
            />
          )}

          {selectedPirep && (
            <InfoWindow
              className="info-window"
              position={{
                lat: selectedPirep.latitude,
                lng: selectedPirep.longitude
              }}
              onCloseClick={() => {
                setSelectedPirep(null);
              }}
            >
              <div className="pirep-info">
                <p className="pirep-title">Pilot Report</p>
                <p>
                  <strong>Altitude:</strong> {Altitude(selectedPirep.altitude)}{" "}
                  feet
                </p>
                <p>
                  <strong>Latitude:</strong> {selectedPirep.latitude}
                </p>
                <p>
                  <strong>Longitude:</strong> {selectedPirep.longitude}
                </p>
                {this.checkTurbulence(selectedPirep.turbulence)}
                {this.checkIcing(selectedPirep.icing)}

                {this.checkDescription(selectedPirep.description)}
                {this.checkIcon(selectedPirep.weather)}
                <p>
                  <strong>Created At:</strong>
                  {moment(selectedPirep.created_at).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    );
  };

  // Google Map configuration

  PirepMap = () => {
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
          <p>Total Miles:</p>
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
        {/* Renders Google Map */}
        {this.PirepMap()}

        {/* Hour Window input form */}

        <PIREPHistoryInput
          handleChange={this.handleChange}
          updateHourWindow={this.updateHourWindow}
        />

        <div className="plan-distance flightDiv">
          {/* Flight plan submission form */}

          <FlightPlanFormDialog submitFlightPlan={this.submitFlightPlan} />

          {/* will display distance */}

          {this.calculatedDistance()}
        </div>
        <div className="logoutButton">
          <Button
            variant="contained"
            color="primary"
            className="btn-color menu-button"
            onClick={this.props.logout}
          >
            Log out
          </Button>
        </div>

        <div className="pirep">
          <FormDialog updatePireps={this.updatePireps} />
        </div>
        <div className="mobileMenu">
          <MenuListComposition
            submitFlightPlan={this.submitFlightPlan}
            updatePireps={this.updatePireps}
            handleChange={this.handleChange}
            updateHourWindow={this.updateHourWindow}
            logout={this.props.logout}
          />
        </div>
      </div>
    );
  }
}

export default PirepMap;
