"use client";

import React from "react";
import { useParams } from "next/navigation";

type Props = {};

export default function Profile(props: Props) {
  const param = useParams();
  return <div>{param.profile} Profile Page</div>;
}
