'use client'

import React, { useContext } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Switch } from '../../components/ui/switch'
import { Label } from '../../components/ui/label'
import ProductTabs from '../../components/layout/product-tabs'
import { ProductCard } from '../../components/cards/product-card'
import { AppContext } from '../../context/app-context'
import { DropDown } from '../../components/dropdown'
import { products } from '../../constants/product-card'

type Props = {}

const categories = ['All Categories', 'Minimalist', 'Classic', 'Modern']

const DashBoardTabs = () => {
  const { toogleShowMap, setToggleShowMap }: any = useContext(AppContext)

  return (
    <Tabs defaultValue={categories[0]} className="w-[1600px] my-2">
      <TabsList className="flex justify-between">
        <div>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </div>

        <div className="flex space-x-2 items-center relative">
          <DropDown
            placeholder="House Type"
            options={['All', 'Rooms', 'Studios', 'Apartements']}
            styles="w-[135px] border-none bg-muted focus:ring-0 focus:ring-offset-0"
          />
          <div className="flex items-center space-x-2">
            <Switch id="map" checked={toogleShowMap} onClick={() => setToggleShowMap((prev: any) => !prev)} />
            <Label htmlFor="map">Map View</Label>
          </div>
        </div>
      </TabsList>
      <ProductTabs value="All Categories" list={products} Component={ProductCard} />
      <ProductTabs value="Minimalist" list={[]} Component={ProductCard} />
      <ProductTabs value="Classic" list={[]} Component={ProductCard} />
      <ProductTabs value="Modern" list={[]} Component={ProductCard} />
    </Tabs>
  )
}

export default function DashBoard({}: Props) {
  return (
    <div className="w-full min-h-screen flex container">
      <DashBoardTabs />
    </div>
  )
}
