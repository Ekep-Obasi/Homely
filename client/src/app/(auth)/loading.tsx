import React from "react";
import LoaderSpinner from "../components/loader-spinner";

export default function AuthLoadingPage() {
  return (
    <div className="min-h-screen w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <LoaderSpinner />
    </div>
  );
}
