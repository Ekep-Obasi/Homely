import * as React from 'react'
import * as Icons from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'
import { useRouter } from 'next/navigation'
import { Listing } from '../../types/listing'

export function ListingCard(props: Listing) {
  const router = useRouter()

  return (
    <Card
      className="w-[320px] h-[425px] hover:cursor-pointer scale-100 hover:scale-95 transition-all"
      onClick={() => router.replace(`dashboard/rent/${props._id}`)}
    >
      <img src={props.image_list[1]} className='w-full h-[250px]' />
      <CardContent className="py-2 space-y-3">
        <div className="w-full space-y-2">
          <p className="flex font-bold overflow-hidden truncate w-[290px]">{props.name}</p>
          <div className="flex items-center space-x-1 text-accent-foreground">
            <Icons.LucideMapPin color='red' /> <p className='overflow-hidden truncate w-[290px]'>{props.address}</p>
          </div>
          <p className="line-clamp-2 text-muted-foreground text-sm">
            {props.description}
          </p>
        </div>
        <Separator className="my-2" />
        <div className='flex justify-between'>
        <div className="flex justify-between">
          <div className="flex items-center justify-between space-x-2">
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
        <span className="font-bold text-primary text-xl">{props.price}</span>
        </div>
      </CardContent>
    </Card>
  )
}
