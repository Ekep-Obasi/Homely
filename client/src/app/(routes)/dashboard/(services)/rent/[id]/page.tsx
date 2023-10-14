"use client";

import Carousel from "@/app/components/carousel";
import Gallery from "@/app/components/gallery";
import { Separator } from "@/app/components/ui/separator";
import { products } from "@/app/constants/product-card";
import { useParams } from "next/navigation";
import { Bed, Bath, Grid2x2 } from "lucide-react";
import SingleMap from "@/app/components/googleMap/single-map";
import { Listing } from "@/app/types/listing";
import { ProfileCard } from "@/app/components/cards/profile-card";

interface Props {
  params: { id: string };
}

export default function ProductDetails() {
  const params = useParams();

  const product: Listing = products.find((prod) => prod.id === params.id);

  return (
    <div className="flex-col items-center container space-y-3 py-6">
      <div className="">
        <h1 className="text-2xl ">{product?.address}</h1>
        <Separator className="my-4" />
      </div>
      <Gallery image={product?.image_list} />

      <div className="flex-col justify-between">
        <div className="flex items-center justify-between space-x-1 w-full">
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Bed />
            <p>
              <span>Number of Beds</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">
                {product?.room_count}
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Bath />
            <p>
              <span>Number of bathrooms</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">
                {product?.room_count}
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Grid2x2 />
            <p>
              <span>Surface Area</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">
                {product?.meta.likes}m²
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Grid2x2 />
            <p>
              <span>Surface Area</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">
                {product?.meta.likes}m²
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-md border rounded-sm px-6 py-3">
            <Grid2x2 />
            <p>
              <span>Surface Area</span>
              <span className="px-2 py-1 bg-primary text-white text-md mx-1 rounded-sm">
                {product?.meta.likes}m²
              </span>
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex ">
          <p className="text-md w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem deleniti unde consectetur numquam aspernatur vel fugit placeat
            odio soluta architecto molestiae facere in, incidunt illo quas
            impedit, esse deserunt velit dolor? Aut repellendus vero praesentium
            modi consequatur impedit, nisi quod eveniet blanditiis quidem
            nostrum similique. Nisi unde at deleniti debitis illum aliquid
            blanditiis voluptatum rem veritatis? Molestias, adipisci rem?
          </p>
          <ProfileCard id="1" />
        </div>
      </div>

      <div></div>
      <SingleMap house={product} />
    </div>
  );
}
