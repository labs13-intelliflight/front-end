import React, { useState}  from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
import Axios from "axios";
// importing moment for time formating
import moment from "moment"
// functions import
import {FlightLevel, Altitude, distance, WeatherIcon, TurbIcon, IcingIcon} from './functions/export.js'
// import WeatherIcon from "./functions/weather-icon.js";
// import IcingIcon from "./functions/icing.js";
// import TurbIcon from "./functions/turbulence.js";
// import distance from "./functions/distance-calculator";

import FormDialog from "../materialUI/formdialog";
import FlightPlanFormDialog from "../materialUI/flightplanFormDialog";
import PIREPHistoryInput from "../forms/PIREPHistoryInput";

class PirepMap extends React.Component {
  state = {
    pirepData: [],
    start: "",
    destination: "",
    hourWindow: 2
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

  updatePireps = () => {
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
      start: JSON.parse(localStorage.getItem('start')),
      destination: JSON.parse(localStorage.getItem('destination'))
    })
  }

  updateHourWindow = hours => {
    this.setState({
        hourWindow: hours
    })
  }

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
    // adding hooks
    const [selectedPirep, setSelectedPirep] = useState(null);

    return (
      <div>
        <GoogleMap
          defaultZoom={4}
          defaultCenter={{ lat: 40.7306, lng: -73.9352 }}
          defaultOptions={{ styles: mapStyles }}
        >
          {this.state.pirepData.map(pirep => {

            let date = new Date();
            date.setHours(date.getHours() - this.state.hourWindow);

            return pirep.created_at >= date.toISOString() ? (
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
                  text:  FlightLevel(pirep.altitude),
                  background: "white",
                  margin: "10px"
                }}
                onClick={() => {
                  setSelectedPirep(pirep)
                }}
              />
              ) : (
                console.log(false)
              )
            })
          }

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
              position={{
                lat: selectedPirep.latitude,
                lng: selectedPirep.longitude
              }}
              onCloseClick={() => {
                setSelectedPirep(null)
              }}
            >
              <div>
                <p>Report</p>
                <p>Altitude: {Altitude(selectedPirep.altitude)} feet</p>
                <p>Latitude: {selectedPirep.latitude}</p>
                <p>Longitude: {selectedPirep.longitude} </p>
                <p>Turbulence: {selectedPirep.turbulence}</p>
                <p>Icing: {selectedPirep.icing}</p>
                <p>Description: {selectedPirep.description}</p>
                
                <p>
                  Weather:
                  <img
                    alt=""
                    src={WeatherIcon(selectedPirep.weather)}
                  />
                </p><p> Created At: {moment(selectedPirep.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
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
        {/* Renders Google Map */}
        {this.PirepMap()}

        {/* Hour Window input form */}
        
        <PIREPHistoryInput
          handleChange={this.handleChange}
          updateHourWindow={this.updateHourWindow}
        />

          <div className="plan-distance flightDiv">

            {/* Flight plan submission form */}

            <FlightPlanFormDialog
               submitFlightPlan={this.submitFlightPlan}
            />

            {/* will display distance */}

            <p>{this.calculatedDistance()}</p>
          </div>
       
        <div className="pirep">
          <FormDialog 
            updatePireps={this.updatePireps}
          />
        </div>
      </div>
    );
  }
}

export default PirepMap;
