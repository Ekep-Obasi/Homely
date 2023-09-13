"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { chats } from "../../constants/chats";
import { ChatTab } from "../../components/chat-tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Separator } from "../../components/ui/separator";
import ChatTabHeader from "../../components/chat-tabs-header";
import GeneralChat from "../../components/general-chat-section";

export default function ChatPage() {
  return (
    <Tabs
      defaultValue="Homely"
      className="w-full flex bg-primary overflow-hidden"
    >
      <TabsList className="flex-col justify-between bg-primary gap-y-2 min-h-screen overflow-auto w-1/4 min-w-[320px]">
        <ChatTabHeader />
        {chats.map((payload, i) => (
          <TabsTrigger className="w-full" key={payload._id} value={payload._id}>
            <ChatTab {...payload} />
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator orientation="vertical" />

      {chats.map((data) => (
        <TabsContent
          className="w-3/4 max-h-screen bg-background overflow-y-hidden"
          key={data._id}
          value={data._id}
        >
          <GeneralChat id={data._id} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
