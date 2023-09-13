"use client";

import { DashBoardMenu } from "../../components/dashboard-menubar";
import Footer from "../../components/footer";
import { ThemeProvider } from "../../components/theme-provider";
import React, { useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/app/context/app-context";
import { LOCAL_STORAGE } from "@/app/services/storage";

interface Props {
  children: React.ReactNode;
}

export default function DashBoardLayout({ children }: Props) {
  const { user, setUser } = useApp();
  const router = useRouter();

  // checks if there is a user before the dom is painted
  useLayoutEffect(() => {
    const storedUser = LOCAL_STORAGE.get("user-data");
    storedUser !== null
      ? setUser(storedUser)
      : user !== null
      ? LOCAL_STORAGE.set("user-data", user)
      : router.push("/signup");
  }, []);

  return (
    <>
      {user ? (
        <ThemeProvider attribute="class" defaultTheme="light">
          <DashBoardMenu />
          {children}
          <Footer />
        </ThemeProvider>
      ) : (
        <></>
      )}
    </>
  );
}
