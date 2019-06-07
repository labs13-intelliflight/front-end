import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import mapStyles from "./mapStyles"
import weatherIcon from "./weather-icon"
import Axios from "axios";

class PirepMap extends React.Component {
  state = {
    pirepData: []
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
                  url: weatherIcon(pirep.weather),
                  scaledSize: new window.google.maps.Size(25, 25)
                }}
              />
            ))}
        </GoogleMap>
      </div>
    );
  }

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
        {this.TestMap()}
      </>
    )
  }
}

export default PirepMap;