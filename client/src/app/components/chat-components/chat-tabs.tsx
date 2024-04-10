import * as React from 'react'
import { TabsContent } from '../ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface chatTabProps {
  _id: string
  image: string
  alt: string
  username: string
  time: string
  lastMessage: string
}

export function ChatTab(props: chatTabProps) {
  return (
    <div className="w-full flex justify-between items-center border-b-slate-10 py-2">
      <div className="flex items-center justify-between space-x-2">
        <Avatar>
          <AvatarImage src={props.image} height="150" />
          <AvatarFallback>{props.alt}</AvatarFallback>
        </Avatar>
        <div className="flex-col justify-start text-left">
          <p className="text-lg font-semibold">{props.username}</p>
          <p className="text-sm text-secondary">{props.lastMessage}</p>
        </div>
      </div>
      <span>{props.time}</span>
    </div>
  )
}

interface tabProps {
  value: string
  list: chatTabProps[]
}

export default function ChatTabs(props: tabProps) {
  return (
    <TabsContent value={props.value} className="w-full flex py-0 space-x-2 items-center px-2">
      <section className="h-[620px] w-full flex gap-x-2 gap-y-4 items-center flex-wrap overflow-y-auto mx-auto justify-center">
        {props.list.length !== 0 ? props.list.map((payload: any, id: any) => <ChatTab key={id} {...payload} />) : <>No Chats Yet</>}
      </section>
    </TabsContent>
  )
}
