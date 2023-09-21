"use client";
import { Button } from "@/app/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Listing } from "@/app/types/listing";

export const columns: ColumnDef<Listing>[] = [
  {
    id: "select",
    cell: ({ row }) => {
      const listing = row.original;
      return (
       <div className="border p-2 min-h-[120px]" >
        <img src={listing.image_list[0]} height={100} width={100} alt="something" /> 
       </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Property ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "id",
  },
  {
    header: "Property Name",
    accessorKey: "name",
  },
  {
    header: "Property Price",
    accessorKey: "price",
  },
  {
    header: "Property Type",
    accessorKey: "house_type",
  },
  {
    header: "Quality",
    accessorKey: "quality",
  },
  {
    header: "Availabilty",
    accessorKey: "availability",
  },
];
