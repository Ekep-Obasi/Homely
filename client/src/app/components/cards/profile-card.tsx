import { generateAcronym } from '@/app/utils'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { User } from '@/app/types/user'

type Props = {
  owner: User
}

export function ProfileCard({ owner }: Props) {
  return (
    <Card className="w-full max-w-[350px] border rounded-sm flex flex-col justify-center items-center text-sm p-2">
      <div className="flex flex-col w-full items-center justify-center">
        <Avatar className="w-[100px] h-[100px] flex space-x-1">
          <AvatarImage src={owner.avatar} />
          <AvatarFallback className="text-2xl">{generateAcronym(owner.user_name)}</AvatarFallback>
        </Avatar>
        <div className="flex-col space-y-2 justify-center">
          <div className="flex space-x-1">
            <span>Owner Name:</span>
            <span className="text-md">{owner.user_name}</span>
          </div>
          <div className="flex space-x-1">
            <span>Number of Properties:</span>
            <span>{owner.listings.length}</span>
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
