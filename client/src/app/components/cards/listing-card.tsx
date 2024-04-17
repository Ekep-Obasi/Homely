import { Listing } from '@/app/types/listing'
import Link from 'next/link'
import { Card } from '../ui/card'
import { Separator } from '../ui/separator'

export default function ListingCard(props: Listing) {
  return (
    <Card className="border max-w-[350px] w-[1/3]">
      <div
        className="w-full min-h-[150px] block rounded-sm"
        style={{
          backgroundImage: `url(${props.image_list[0]})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="flex flex-col p-1">
        <span className="text-bold">{props.name}</span>
        <span>{props.address}</span>
        <span>{props.meta.likes}</span>
        <Separator className="my-2" />
      </div>
      <div className="flex space-x-1 space-y-1 py-3 items-center p-1 text-sm">
        <span className="text-sm p-1 bg-slate-300 rounded-sm">{props.availability}</span>
        <span>Updated Dec 5</span>
        <a href={`rent/${props._id}`} className="text-blue text-sm">
          View Listing
        </a>
      </div>
      <div className="bg-muted flex flex-col items-center p-1 px-2">
        <span>Last 30 days</span>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center">
            <span>Views</span>
            <span>12</span>
          </div>
          <Separator className="my-2" orientation="vertical" />
          <div className="flex flex-col items-center">
            <span>Reviews</span>
            <span>2</span>
          </div>
          <Separator className="my-2" orientation="vertical" />
          <div className="flex flex-col items-center">
            <span>Applications</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
