"use client";

import { products } from "@/app/constants/product-card";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function ProductDetails() {
  const params = useParams();

  const product: any = products.find((prod) => prod.id === params.id);

  return (
    <div className="flex">
      <h1>{product?.address}</h1>
      <Image src={product?.image} width="200" height="200" alt={product?.id} />
    </div>
  );
}
