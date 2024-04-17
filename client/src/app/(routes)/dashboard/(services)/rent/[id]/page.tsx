'use client'

import Gallery from '@/app/components/gallery'
import { Separator } from '@/app/components/ui/separator'
import { useParams } from 'next/navigation'
import { Bed, Bath, Grid2x2 } from 'lucide-react'
import SingleMap from '@/app/components/googleMap/single-map'
import { ProfileCard } from '@/app/components/cards/profile-card'
import { useEffect, useState } from 'react'
import { httpClient } from '@/app/config/axios'
import { ApiResponse } from '@/app/types/index'
import { Listing } from '@/app/types/listing'

export default function ProductDetails() {
  const params = useParams()
  const [listing, setListing] = useState<Listing>()

  useEffect(() => {
    async function fetchUniqueListings() {
      try {
        const res = (await httpClient.get(`/listing/${params.id}`)) as ApiResponse<Listing>

        setListing(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchUniqueListings()
  }, [params])

  return (
    <div className="flex-col items-center container space-y-3 py-6">
      <div className="">
        <h1 className="text-2xl ">{listing?.address}</h1>
        <Separator className="my-4" />
      </div>
      <Gallery image={listing?.image_list ?? []} />

      <div className="flex-col justify-between">
        <div className="flex items-center justify-between space-x-1 w-full">
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Bed />
            <p>
              <span>Number of Beds</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">{listing?.room_count}</span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Bath />
            <p>
              <span>Number of bathrooms</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">{listing?.room_count}</span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Grid2x2 />
            <p>
              <span>Surface Area</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">{listing?.meta.likes}m²</span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Grid2x2 />
            <p>
              <span>Surface Area</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">{listing?.meta.likes}m²</span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Grid2x2 />
            <p>
              <span>Surface Area</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">{listing?.meta.likes}m²</span>
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex ">
          <p className="text-md w-1/2">{listing?.description}</p>
          {listing?.owner_id && <ProfileCard owner={listing?.owner_id} />}
        </div>
      </div>
      {listing && <SingleMap house={listing} />}
    </div>
  )
}
