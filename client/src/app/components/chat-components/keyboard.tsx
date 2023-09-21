"use client";
import React from "react";
import * as Icons from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menu-bar";
import Picker from "./emoji-picker";
import { KeyBoardContext } from "../../context/keyboard-context";

function AddOptions() {
  return (
    <Menubar className="bg-primary">
      <MenubarMenu>
        <MenubarTrigger className="bg-primary">
          <Icons.Plus />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Document</MenubarItem>
          <MenubarItem>Photos & Videos</MenubarItem>
          <MenubarItem>Camera</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export function KeyBoard() {
  const { showPicker, setShowPicker, message, setMessage }: any =
    React.useContext(KeyBoardContext);

  return (
    <div className="absolute min-h-[65px] bg-primary w-full bottom-0 text-secondary flex items-center gap-x-2 px-1 z-50">
      <Icons.Smile
        className="hover:cursor-pointer"
        onClick={() => setShowPicker((prev: any) => !prev)}
      />
      <AddOptions />
      <textarea
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        placeholder="Type your message here."
        className="text-primary w-full flex items-center focus:outline-none"
      />
      {showPicker && <Picker style="-z-50 absolute w-full bottom-[70px]" />}
    </div>
  );
}
