import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
// import airportData from "./data/airports.json";
import pirepData from "./data/pireps-data.json";
import mapStyles from "./mapStyles"
import weatherIcon from "./weather-icon"


function Map() {

  return (
    <div>
      {/* {airportData.airports.map(airport => airport.lat)} */}

      <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 40.7306, lng: -73.9352 }}
        defaultOptions={{styles: mapStyles}}
      >
        {/* {airportData.airports.filter(airport => airport.country === "United States").map(airport => (
        <Marker
          key={airport.code}
          position={{
            lat: parseInt(airport.lat),
            lng: parseInt(airport.lon)
          }}
        />

      ))} */}
      
        {pirepData.pireps
          .filter(pirep => pirep.weather > 0)
          .map(pirep => (
            <Marker
            
              key={pirep.code}
              position={{
                lat: pirep.lat,
                lng: pirep.lon
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

// const API = "AIzaSyCpRIIV74UGtS75mBRYftiMpr1IxblsK4E";
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap() {
  // console.log(process.env.REACT_APP_GOOGLE_KEY)
  // console.log(process.env.REACT_APP_SECRET)

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
