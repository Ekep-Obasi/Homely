import * as React from "react";
import * as Icons from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function ChatSearch() {
  return (
    <div className="relative flex items-center space-x-2 px-3">
      <Icons.Search className="absolute ml-3" />
      <Input
        className="w-full h-[35px] focus:ring-0 focus:ring-offset-0 text-black rounded-full px-8"
        placeholder="Search..."
      />
      <button className="bg-none border-none">
        <Icons.ListFilter className="text-white hover:bg-primary" />
      </button>
    </div>
  );
}
