import * as React from 'react'
import { useState, useCallback } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import { FaMapMarkerAlt } from 'react-icons/fa'
import ControlPanel from './control-panel'
const TOKEN = 'pk.eyJ1Ijoia2VsbWl0aCIsImEiOiJjbGx4NmE3bm8wNzBwM3BwZ3hycnRjenZrIn0.1rmQnWTCFD2zcmITVNZj2A' // Set your mapbox token here

const initialViewState = {
  latitude: 40,
  longitude: -100,
  zoom: 3.5,
}

export default function SetLocationFromMap() {
  const [marker, setMarker] = useState({
    latitude: 40,
    longitude: -100,
  })
  const [events, logEvents] = useState<Record<string, any>>({})

  const onMarkerDragStart = useCallback((event: any) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }))
  }, [])

  const onMarkerDrag = useCallback((event: any) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }))
    console.log(event.lngLat)

    setMarker({
      longitude: event.lngLat.lat,
      latitude: event.lngLat.lng,
    })
  }, [])

  const onMarkerDragEnd = useCallback((event: any) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }))
  }, [])

  return (
    <ReactMapGL {...initialViewState} mapStyle="mapbox://styles/mapbox/dark-v9" height="750px" width="100%" mapboxApiAccessToken={TOKEN}>
      <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}
        draggable={true}
        onDragStart={onMarkerDragStart}
        onDrag={onMarkerDrag}
        onDragEnd={onMarkerDragEnd}
        className="min-w-[25px]:"
      >
        <FaMapMarkerAlt color="red" />
      </Marker>

      <NavigationControl />
      <ControlPanel events={events} />
    </ReactMapGL>
  )
}
