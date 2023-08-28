"use client";

import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
} from "../components/ui/navigation-menu";

type Props = {};

const categories = ["All Categories", "Rooms", "Studio", "Apartement"];

const DashBoardTabs = () => {
  return (
    <Tabs defaultValue={categories[0]} className="w-[1600px] my-2">
      <TabsList className="flex justify-between">
        <div>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </div>

        <div className="flex space-x-2 items-center relative">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="border-none">
                <NavigationMenuTrigger className="bg-muted border-none text-black">
                  Quality
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid gap-3 p-6 w-[150px] bg-white">
                    <li className="row-span-3 hover:bg-muted">Minimalist</li>
                    <li className="row-span-3 hover:bg-muted">Classic</li>
                    <li className="row-span-3 hover:bg-muted">Mordern</li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-2">
            <Switch id="map" />
            <Label htmlFor="map">Map View</Label>
          </div>
        </div>
      </TabsList>
      <TabsContent value="All Categories">All Categoried here</TabsContent>
      <TabsContent value="Rooms">All Rooms Here</TabsContent>
      <TabsContent value="Studio">All Studios Here</TabsContent>
      <TabsContent value="Apartement">All Apartements Here</TabsContent>
    </Tabs>
  );
};

export default function DashBoard({}: Props) {
  return (
    <div className="w-full min-h-screen flex container">
      <DashBoardTabs />
    </div>
  );
}
