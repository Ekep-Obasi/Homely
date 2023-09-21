import * as Icons from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menu-bar";
import ChatSearch from "./chat-search";

export default function ChatTabHeader() {
  return (
    <div className="flex-col w-full">
      <div className="py-2 flex w-full justify-between">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/117433403?v=4" />
          <AvatarFallback>EO</AvatarFallback>
        </Avatar>
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
      <ChatSearch />
    </div>
  );
}
