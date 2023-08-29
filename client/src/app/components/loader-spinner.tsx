"use client";

import React from "react";
import { MutatingDots } from "react-loader-spinner";

export default function LoaderSpinner() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#0f182a"
      secondaryColor="#0f182a"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
