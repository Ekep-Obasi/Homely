/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./GoogleMaps.css";
import { Skeleton } from "../ui/skeleton";
// import Search from "../autocomplete-search";

const Map = () => {
  const [location, setLocation] = React.useState({ lat: 2, lng: 3 });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        setLocation({ lat: latitude, lng: longitude });
      }
    );
    console.log(location);
  }, []);

  return (
    <>
      {/* <Search /> */}
      <GoogleMap
        zoom={15}
        center={location}
        mapTypeId="hybrid"
        mapContainerStyle={{
          width: "320px",
          height: "100%",
        }}
      >
        {location && <MarkerF position={location} />}
      </GoogleMap>
    </>
  );
};

const GoogleMapWrapper = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC4DXam-i6LPD0F8Oku1bjup-tQeWoAxpY",
  });
  if (!isLoaded) return <Skeleton className="h-[620px] w-full rounded" />;
  return <Skeleton className="h-[620px] w-full rounded" />;
  // return <Map />;
};

export default GoogleMapWrapper;
