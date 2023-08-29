import * as React from "react";
import * as Icons from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { usePathname, useRouter } from "next/navigation";
import { products } from "../constants/product-card";

interface productProps {
  id: string;
  image: string;
  address: string;
  location: string;
  availability: "AVAILABLE" | "NOT AVAILABLE";
  rooms: number;
  bathrooms: number;
  cost: string;
  liked?: boolean;
  area: number;
}

export function ProductCard(props: productProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Card
      className="min-w-[325px] hover:cursor-pointer scale-100 hover:scale-95 transition-all"
      onClick={() => router.push(`${pathname}/${props.id}`)}
    >
      <CardHeader
        className="h-[250px] bg-cover bg-center rounded-t"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <div className="w-full flex justify-between items-center">
          <Badge className="bg-green h-6">{props.availability}</Badge>
          <Button variant="ghost" className="rounded px-0 w-[30px] bg-none">
            <Icons.Heart />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="py-2 space-y-2">
        <div className="flex text-sm items-center space-x-1">
          <Icons.BadgeCheck className="bg-green" /> <p>verified</p>
        </div>
        <div className="w-full">
          <p className="flex font-bold">{props.address}</p>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icons.MapPin /> <p>{props.location}</p>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex justify-between">
          <div className="flex items-center justify-between space-x-1">
            <div className="flex items-center space-x-1 text-sm">
              <Icons.Bed /> <p>{props.rooms}</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Icons.Bath /> <p>{props.bathrooms}</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Icons.Grid2x2 /> <p>{props.area}m²</p>
            </div>
          </div>
        </div>
        <p className="font-bold text-primary text-xl">{props.cost}</p>
      </CardContent>
    </Card>
  );
}
