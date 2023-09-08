import * as Icons from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
import { people } from "./people";

type Props = {};

export default function Sell(props: Props) {
  return (
    <div className="w-full min-h-screen container pt-4">
      <div className="w-full flex justify-between">
        <h1>Listings</h1>
        <CreateProperty />
      </div>
      <Tabs defaultValue="grid" className="w-full my-2">
        <TabsList className="flex justify-end">
          <TabsTrigger value="grid">
            <Icons.Grid2x2 />
          </TabsTrigger>
          <TabsTrigger value="table">
            <Icons.Table2 />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="grid">Grid View</TabsContent>
        <TabsContent value="table">
          <PeopleDataTable columns={columns} data={people} />
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create A Property</DialogTitle>
          <DialogDescription>
            This information will be viewed by all users on this platform
            <CreatePropertyForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
