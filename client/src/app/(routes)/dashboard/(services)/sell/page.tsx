'use client'

import * as Icons from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/app/components/ui/dialog";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import React from "react";
import CreatePropertyForm from "@/app/components/forms/createPropertyForm";
import PeopleDataTable from "./data-table";
import { columns } from "./columns";
import { products } from "@/app/constants/product-card";
import ProductTabs from "@/app/components/layout/product-tabs";
import { ProductCard } from "@/app/components/cards/product-card";
import { Listing } from "@/app/types/listing";
import ListingCard from "@/app/components/cards/listing-card";

type Props = {};

export default function Sell(props: Props) {
  return (
    <div className="w-full min-h-screen container pt-4">
      <div className="w-full flex justify-between">
        <h1>Listings</h1>
        <CreateProperty />
      </div>
      <Tabs defaultValue="table" className="w-full my-2">
        <TabsList className="flex justify-end">
          <TabsTrigger value="grid">
            <Icons.Grid2x2 />
          </TabsTrigger>
          <TabsTrigger value="table">
            <Icons.Table2 />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="grid">
        <section className="h-[820px] w-full flex gap-x-2 gap-y-4 items-center flex-wrap overflow-y-auto mx-auto justify-center">
          {products.length !== 0 ? (
            products.map((payload: Listing, id: number) => (
              <ListingCard key={id} {...payload} />
            ))
          ) : (
            <>No Available products yet</>
          )}
        </section>
        </TabsContent>
        <TabsContent value="table">
          <PeopleDataTable columns={columns} data={products} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const CreateProperty = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex items-center gap-x-1 cursor-pointer">
          <Icons.Plus /> <span>Add Listing</span>
        </Button>
      </DialogTrigger>
      <CreatePropertyForm />
    </Dialog>
  );
};
