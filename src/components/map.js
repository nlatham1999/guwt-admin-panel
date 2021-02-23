

import React from "react";
// import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const Map = () => {
//   const defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
    const center = {
        lat: 59.95,
        lng: 30.33
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '40%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  'AIzaSyBuTO1TPvcKxBfDqa0RXmhcIjJ32Xr-ZOA' }}
          defaultCenter={center}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}

export default Map;