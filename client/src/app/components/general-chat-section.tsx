import * as React from "react";
import { chats } from "../constants/chats";
import * as Icons from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menu-bar";
import { KeyBoard } from "./keyboard";
import KeyBoardProvider from "../context/keyboard-context";

interface generalChatHeaderProps {
  image: string | undefined;
  alt: string | undefined;
  name: string | undefined;
}

const ChatGeneralHeader = (props: generalChatHeaderProps) => {
  return (
    <div className="p-2 flex w-full justify-between bg-current">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={props.image} />
          <AvatarFallback>{props.alt}</AvatarFallback>
        </Avatar>
        <h1 className="text-secondary">{props.name}</h1>
      </div>
      <Menubar className="bg-primary border-none rounded-full">
        <MenubarMenu>
          <MenubarTrigger className="bg-primary text-white">
            <Icons.MoreVertical />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Settings</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Log out</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

interface Props {
  id: string;
}

export default function GeneralChat(props: Props) {
  const user = chats.find((user) => user._id === props.id);
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden w-full bg-secondary h-full">
      <ChatGeneralHeader
        image={user?.image}
        name={user?.username}
        alt={user?.alt}
      />
      <KeyBoardProvider>
        <KeyBoard />
      </KeyBoardProvider>
    </div>
  );
}
