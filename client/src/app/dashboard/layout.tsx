"use client";
import { DashBoardMenu } from "../components/dashboard-menubar";
import Footer from "../components/footer";
import { ThemeProvider } from "../components/theme-provider";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DashBoardLayout({ children }: Props) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <DashBoardMenu />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
