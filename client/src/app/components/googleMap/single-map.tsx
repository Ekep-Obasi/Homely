import { Listing } from "@/app/types/listing";
import ReactMapGL, {
  Marker,
  ViewState,
  ViewportProps,
  NavigationControl,
  MapRef,
} from "react-map-gl";
import { useState, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import {PiHouseFill} from 'react-icons/pi'

export default function SingleMap({ house }: {house: Listing}) {
  const mapRef = useRef<MapRef | null>(null);
  const [viewport, setViewPort] = useState<ViewState>({
    latitude: house.latitude,
    longitude: house.longitude,
    zoom: 13,
  });

  console.log(JSON.stringify(house, null, 4))

  return (
    <div className="relative flex">
      <ReactMapGL
        {...viewport}
        height="350px"
        width="100%"
        mapboxApiAccessToken="pk.eyJ1Ijoia2VsbWl0aCIsImEiOiJjbGx4NmE3bm8wNzBwM3BwZ3hycnRjenZrIn0.1rmQnWTCFD2zcmITVNZj2A"
        onViewStateChange={(nextViewPort: any) => setViewPort(nextViewPort)}
        ref={(instance) => (mapRef.current = instance)}
        mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
        scrollZoom={false}
        minZoom={8}
      >
        <div className="absolute top-0 left-0 p-4">
          <NavigationControl showCompass={false} />
        </div>

        <Marker latitude={house.latitude} longitude={house.longitude} offsetLeft={-15} offsetTop={-15}>
        <PiHouseFill className='w-[50px] h-[50px]' color="orange" />  
        </Marker> 
      </ReactMapGL>
    </div>
  );
}
