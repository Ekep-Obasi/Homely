import { generateAcronym } from '@/app/utils'
import { AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

type Props = {
  id: string
}

export function ProfileCard({ id }: Props) {
  return (
    <Card className="w-full max-w-[350px] border rounded-sm flex flex-col justify-center items-center text-sm p-2">
      <div className="flex flex-col w-full items-center justify-center">
        <Avatar className="w-[100px] h-[100px] flex space-x-1">
          <AvatarImage src="/" />
          <AvatarFallback className="text-2xl">{generateAcronym('Blasise Pascal')}</AvatarFallback>
        </Avatar>
        <div className="flex-col space-y-2 justify-center">
          <div className="flex space-x-1">
            <span>Owner Name:</span>
            <span className="text-md">Blaise Plascal</span>
          </div>
          <div className="flex space-x-1">
            <span>Number of Properties:</span>
            <span>12</span>
          </div>
          <div className="flex space-x-1">
            <span>Verified Information:</span>
            <span></span>
          </div>
          <Button>
            <a href="/">View Profile</a>
          </Button>
        </div>
      </div>
    </Card>
  )
}
