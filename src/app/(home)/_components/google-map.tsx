"use client";

import React from "react";

import { createRoot } from "react-dom/client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMapComponent = () => {
  const API_KEY = "AIzaSyDNW5LzBI5zYxXlfsx7Fj2sSrY_Fz_uBQ0";
  return (
    <div className="w-full h-96">
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "0.5rem", // optional for rounded corners
            border: "1px solid #e2e8f0", // optional border
          }}
          defaultCenter={{ lat: -6.175959, lng: 106.831652 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
        <Marker
          position={{ lat: -6.175959, lng: 106.831652 }}
          clickable={true}
          onClick={() => alert("marker was clicked!")}
          title={"clickable google.maps.Marker"}
        />
      </APIProvider>
    </div>
  );
};

export default GoogleMapComponent;
