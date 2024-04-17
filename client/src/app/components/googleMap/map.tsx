'use clinet'

import React from 'react'
import ReactMapGL, { Marker, ViewState, Popup, MapRef } from 'react-map-gl'
import MapSearchBox from './map-search'
import 'mapbox-gl/dist/mapbox-gl.css'
import { products } from '@/app/constants/product-card'
import { FaHome } from 'react-icons/fa'
import { useAppStore } from '@/app/store'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { MAP_BOX_API_TOKEN } from '@/app/constants'

interface Props {
  width: string
  height: string
}

export default function Map({ width, height }: Props) {
  const mapRef = React.useRef<MapRef | null>(null)
  const { location } = useAppStore()
  const [viewport, setViewPort] = React.useState<ViewState>({
    latitude: location?.latitude || 1,
    longitude: location?.longitude || 1,
    zoom: 10,
  })

  return (
    <div className="relative flex">
      <ReactMapGL
        {...viewport}
        height={height}
        width={width}
        mapboxApiAccessToken={MAP_BOX_API_TOKEN}
        onViewStateChange={(nextViewPort: any) => setViewPort(nextViewPort)}
        ref={(instance) => (mapRef.current = instance)}
        mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
        minZoom={5}
        maxZoom={15}
        scrollZoom={true}
      >
        {products.map((item, index, arr) => (
          <Marker
            latitude={item.latitude}
            longitude={item.longitude}
            className="w-[50px] h-[50px]"
            key={index}
            offsetTop={-15}
            offsetLeft={-15}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaHome color="#fff" className="w-[35px] h-[35px]" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Marker>
        ))}

        <MapSearchBox defaultValue="" />
      </ReactMapGL>
    </div>
  )
}
