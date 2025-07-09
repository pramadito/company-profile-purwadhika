"use client";

import React from "react";

import { createRoot } from "react-dom/client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMapComponent = () => {
  const API_KEY = "AIzaSyDNW5LzBI5zYxXlfsx7Fj2sSrY_Fz_uBQ0";
  return (
    <div>
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: "300px", height: "300px" }}
          defaultCenter={{ lat: -6.175959, lng: 106.831652 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          loading="lazy"  
          
        />
         <Marker
          position={{lat: -6.175959, lng: 106.831652}}
          clickable={true}
          onClick={() => alert('marker was clicked!')}
          title={'clickable google.maps.Marker'}
        />
      </APIProvider>
    </div>
  );
};

export default GoogleMapComponent;
