import * as React from 'react'
import * as Icons from 'lucide-react'
import { Card, CardContent } from '@/app/components/ui/card'
import Carousel, { carouselType } from '@/app/components/carousel'
import { useRouter } from 'next/router'
import { Listing } from '@/app/types/listing'
import { Separator } from '@radix-ui/react-select'

export function ListingCard(props: Listing) {
  const router = useRouter()

  return (
    <Card
      className="min-w-[325px] hover:cursor-pointer scale-100 hover:scale-95 transition-all"
      onClick={() => router.push(`dashbord/No Available listings yet${props._id}`)}
    >
      <Carousel image={props.image_list} type={carouselType.CARD} />
      <CardContent className="py-2 space-y-2">
        <div className="flex text-sm items-center space-x-1">
          <Icons.BadgeCheck className="bg-green" /> <p>verified</p>
        </div>
        <div className="w-full">
          <p className="flex font-bold">{props.address}</p>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icons.MapPin /> <p>{props.name}</p>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex justify-between">
          <div className="flex items-center justify-between space-x-1">
            <div className="flex items-center space-x-1 text-sm">
              <Icons.Bed /> <p>{props.room_count}</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Icons.Bath /> <p>{props.bath_count}</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Icons.Grid2x2 /> <p>{props.meta.likes}m²</p>
            </div>
          </div>
        </div>
        <p className="font-bold text-primary text-xl">{props.price}</p>
      </CardContent>
    </Card>
  )
}
