"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "./sheet";

const Menubar = () => {
  return (
    <div className="w-4/5 flex justify-between mx-auto border-b">
      <Image
        src={require("../../../../public/logo.png")}
        height='75'
        alt="broken image"
      />
      <ul className="list-none flex border-1 border-grey-300">
        <li className="p-7">
          <Link href="./" className="text-white-600">
            Home
          </Link>
        </li>
        <li className="p-7">
          <Link href="./" className="text-white-600">
            LandLord
          </Link>
        </li>
        <li className="p-7">
          <Link href="./" className="text-white-600">
            Tenant
          </Link>
        </li>
        <li className="p-7">
          <Link href="./" className="text-white-600">
            Contact Us
          </Link>
        </li>
        <li className="p-7">
          <Link href="/signup" className="text-white-600">
            Sign Up
          </Link>
        </li>
        <li className="p-7">
          <Sheet>
            <SheetTrigger>Your Profile</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              </SheetHeader>
              <SheetFooter>Hi there</SheetFooter>
            </SheetContent>
          </Sheet>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
