import React from 'react'
import { TabsContent } from '../ui/tabs'
import Map from '../googleMap/map'
import { Listing } from '../../types/listing'
import { useAppStore } from '@/app/store'

interface Props {
  list: Listing[]
  Component: any
  value: string
}

export default function ProductTabs(props: Props) {
  const { toggleShowMap } = useAppStore()

  return (
    <TabsContent value={props.value} className="w-full flex py-0 space-x-2  px-2">
      {!toggleShowMap ? (
        <section className="h-[820px] w-full flex gap-x-2 gap-y-4 flex-wrap overflow-y-auto mx-auto justify-center">
          {props.list.length ? (
            props.list.map((payload: Listing, id: number) => <props.Component key={id} {...payload} />)
          ) : (
            <>No Available listings yet</>
          )}
        </section>
      ) : (
        <div className="bg-primary w-full h-full">
          <Map width="100%" height="820px" />
        </div>
      )}
    </TabsContent>
  )
}
