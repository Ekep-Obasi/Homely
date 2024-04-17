'use client'

import React, { useContext, useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Switch } from '../../components/ui/switch'
import { Label } from '../../components/ui/label'
import ProductTabs from '../../components/layout/product-tabs'
import { ListingCard } from '../../components/cards/product-card'
import { DropDown } from '../../components/dropdown'
import { products } from '../../constants/product-card'
import { httpClient } from '@/app/config/axios'
import { ApiResponse } from '@/app/types/index'
import { Listing, listingQueries } from '@/app/types/listing'
import { useAppStore, useDataStore } from '@/app/store'
import { categories, qualityOptionList } from '@/app/constants'

const DashBoardTabs = () => {
  const { toggleShowMap, setToggleShowMap } = useAppStore((s) => s)
  const { listings, setListings, listingQueries, setListingQueries } = useDataStore((s) => s)

  useEffect(() => {
    const run = async () => {
      const queryStr = new URLSearchParams(listingQueries as any).toString()
      try {
        const listing = (await httpClient.get(`/listing?${queryStr}`)) as ApiResponse<Listing[]>

        setListings(listing.data.data)
      } catch (err) {
        setListings(products)
      }
    }

    run()
  }, [listingQueries])

  return (
    <Tabs defaultValue={listingQueries.quality || categories[0].label} className="w-[1600px] my-2">
      <TabsList className="flex justify-between">
        <div>
          {categories.map(({ label, value }) => (
            <TabsTrigger
              onClick={() => setListingQueries({ ...listingQueries, quality: value })}
              key={label}
              value={label}
            >
              {label}
            </TabsTrigger>
          ))}
        </div>
        <div className="flex space-x-2 items-center relative">
          <DropDown
            placeholder="House Type"
            options={qualityOptionList}
            styles="w-[135px] border-none bg-muted focus:ring-0 focus:ring-offset-0"
          />
          <div className="flex items-center space-x-2">
            <Switch id="map" checked={toggleShowMap} onClick={() => setToggleShowMap(!toggleShowMap)} />
            <Label htmlFor="map">Map View</Label>
          </div>
        </div>
      </TabsList>
      {categories.map(({ label, value }) => (
        <ProductTabs key={value} value={label} list={listings} Component={ListingCard} />
      ))}
    </Tabs>
  )
}

export default function DashBoard() {
  return (
    <div className="w-full min-h-screen flex container">
      <DashBoardTabs />
    </div>
  )
}
