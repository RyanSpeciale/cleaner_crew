import React from 'react';
import { StaticGoogleMap, Marker } from 'react-static-google-map';



const Map = () => {
  return (
    <div>
        <StaticGoogleMap apiKey={process.env.GOOGLE_MAPS_API} size="700x500" center="Kenosha, WI" zoom={12}>
            <Marker location={{ lat: 42.58386018849419, lng: -87.82354825353667}} />
        </StaticGoogleMap>
    </div>
  )
}

export default Map