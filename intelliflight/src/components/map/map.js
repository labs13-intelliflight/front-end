import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline
} from "react-google-maps";
import mapStyles from "./mapStyles"
// import weatherIcon from "./weather-icon"
import Axios from "axios";
import turbIcon from './turbulence.js'

// Set global variables for start and destination

let start;
let destination;

class PirepMap extends React.Component {
  state = {
    pirepData: [],
    start: null,
    destination: null
  }

  componentDidMount() {
    Axios.get('https://intelliflight-api.onrender.com/api/pireps')
      .then(res => {
        this.setState({
          pirepData: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  submitFlightPlan = event => {
    event.preventDefault();
    this.setState({
      start: start,
      destination: destination
    })
  }

  // Creates Google map

  Map = () => {
    return (
      <div>
  
        <GoogleMap
          defaultZoom={4}
          defaultCenter={{ lat: 40.7306, lng: -73.9352 }}
          defaultOptions={{styles: mapStyles}}
        >
        
          {this.state.pirepData
            // .filter(pirep => pirep.weather > 0)
            .map(pirep => (
              <Marker
                key={pirep.id}
                position={{
                  lat: pirep.latitude,
                  lng: pirep.longitude
                }}
                icon={{
                  // url: turbIcon(pirep.weatherIcon),
                  url: turbIcon(pirep.turbulence),
                  scaledSize: new window.google.maps.Size(25, 25)
                }}
              />
            ))}

            {this.state.start && this.state.destination && (
              <Polyline
                path={[{lat: this.state.start.coordinates.lat, lng: this.state.start.coordinates.lng}, {lat: this.state.destination.coordinates.lat, lng: this.state.destination.coordinates.lng}]}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 5,
                }}
              />
            )}
        </GoogleMap>
      </div>
    );
  }

  // Google Map configuration

  TestMap = () => {

    const MapWrapped = withScriptjs(withGoogleMap(this.Map));
    
    return (
      <div style={{ width: "100vw", height: "90vh" }}>
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
  }

  render() {
    return (
      <>

      {/* Flight plan submission form */}

        <h4>Plan Your Flight</h4>
        <form onSubmit={this.submitFlightPlan}>
          <p>Starting Point</p>
          <GoogleComponent
            apiKey={process.env.REACT_APP_GOOGLE_KEY}
            language={'en'}
            coordinates={true}
            locationBoxStyle={'custom-style'}
            locationListStyle={'custom-style-list'}
            onChange={event => {
              start = event;
            }}
          />
          <p>Destination</p>
          <GoogleComponent
            apiKey={process.env.REACT_APP_GOOGLE_KEY}
            language={'en'}
            coordinates={true}
            locationBoxStyle={'custom-style'}
            locationListStyle={'custom-style-list'}
            onChange={event => {
              destination = event;
            }}
          />
          <button>Submit</button>
        </form>

        {/* Renders Google Map */}
        
        {this.TestMap()}
      </>
    )
  }
}

export default PirepMap;