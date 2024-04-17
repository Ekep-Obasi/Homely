'use client'

import React from 'react'
import { ListingCard } from '../../../../components/cards/product-card'
import { products } from '@/app/constants/product-card'
import * as Icons from 'lucide-react'
import { Tabs, TabsTrigger, TabsList } from '@/app/components/ui/tabs'
import { Switch } from '@/app/components/ui/switch'
import { Label } from '@/app/components/ui/label'
import { DropDown } from '@/app/components/dropdown'
import { useAppStore } from '@/app/store'
import ProductTabs from '@/app/components/layout/product-tabs'
import { categories } from '@/app/constants'

type Props = {}

export default function RentPage({}: Props) {
  const styles = `inline-flex h-10 items-center justify-start space-x-3 rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`

  const { toggleShowMap, setToggleShowMap } = useAppStore()

  return (
    <div className="w-full flex-row relative">
      <Tabs defaultValue={categories[0].value} className="w-full p-4">
        <TabsList className="flex justify-between bg-white">
          <div className="flex space-x-2">
            <div className={styles}>
              <Icons.MapPin /> <p>Biyemassi, Yde</p>
            </div>
            {categories.map(({ value, label }) => (
              <TabsTrigger
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full"
                key={value}
                value={value}
              >
                {label}
              </TabsTrigger>
            ))}
          </div>

          <div className="flex space-x-2 items-center relative">
            <DropDown options={[]} label="Quality" placeholder="Quality" styles="w-[100px]" />

            <DropDown
              options={[]}
              label="Sort"
              placeholder={
                <div className="flex space-x-2 items-center">
                  <Icons.Filter /> <span>Sort</span>
                </div>
              }
              styles="w-[100px]"
            />
            <div className="flex items-center space-x-2">
              <Switch id="map" checked={toggleShowMap} onClick={() => setToggleShowMap(!toggleShowMap)} />
              <Label htmlFor="map">Map View</Label>
            </div>
          </div>
        </TabsList>

        <ProductTabs value="All Categories" list={products} Component={ListingCard} />

        <ProductTabs value="Rooms" list={[]} Component={products} />
        <ProductTabs value="Studio" list={[]} Component={ListingCard} />
        <ProductTabs value="Apartement" list={[]} Component={ListingCard} />
      </Tabs>
    </div>
  )
}
