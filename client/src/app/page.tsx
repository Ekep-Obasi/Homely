'use client'
import { Button } from "./components/ui/button";
import { useState } from "react";
import SetLocationFromMap from "./components/googleMap/set-position-on-map";

export default function Home() {
  const [marker, setMarker] = useState({
    latitude: 43,
    longitude: -79
  });

  return (
    <main className="flex-col items-center justify-center">
      <h1 className="text-xl text-red-300">
        Homely - A house rental application.
      </h1>
      <Button>Click me</Button>
      <div className="mx-auto"></div>
      <SetLocationFromMap />
      <div>Latitude: {marker.latitude}</div>
      <div>Longitude: {marker.longitude}</div>
    </main>
  );
}
