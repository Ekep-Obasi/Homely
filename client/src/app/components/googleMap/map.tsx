"use clinet";

import React from "react";
import ReactMapGL, { Marker, ViewState, Popup, MapRef } from "react-map-gl";
import MapSearchBox from "./map-search";
import "mapbox-gl/dist/mapbox-gl.css";

interface Props {
  width: string;
  height: string;
}

export default function Map({ width, height }: Props) {
  const mapRef = React.useRef<MapRef | null>(null);
  const [viewport, setViewPort] = React.useState<ViewState>({
    latitude: 43,
    longitude: -79,
    zoom: 10,
  });

  return (
    <div className="relative flex">
      <ReactMapGL
        {...viewport}
        height={height}
        width={width}
        mapboxApiAccessToken="pk.eyJ1Ijoia2VsbWl0aCIsImEiOiJjbGx4NmE3bm8wNzBwM3BwZ3hycnRjenZrIn0.1rmQnWTCFD2zcmITVNZj2A"
        onViewStateChange={(nextViewPort: any) => setViewPort(nextViewPort)}
        ref={(instance) => (mapRef.current = instance)}
        mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
        minZoom={5}
        maxZoom={15}
      >
        <MapSearchBox defaultValue="" />
      </ReactMapGL>
    </div>
  );
}
