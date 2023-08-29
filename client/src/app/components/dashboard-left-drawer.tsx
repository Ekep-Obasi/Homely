"use client";

import React from "react";
import * as Icons from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

interface Component {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const menuComponents: Component[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <Icons.LayoutDashboard />,
  },
  {
    title: "Properties",
    href: "/dashboard/sell",
    icon: <Icons.Gem />,
  },
  {
    title: "Messages",
    href: "/chat",
    icon: <Icons.MessageCircle />,
  },
  {
    title: "Transactoins",
    href: "/transactions",
    icon: <Icons.ArrowRightLeft />,
  },
  {
    title: "Reports",
    href: "",
    icon: <Icons.Files />,
  },
];

const otherComponents: Component[] = [
  {
    title: "Help Center",
    href: "/help",
    icon: <Icons.Info />,
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: <Icons.HelpCircle />,
  },
  {
    title: "Provie feedback",
    href: "/feedback",
    icon: <Icons.PencilLine />,
  },
];

export function DashboardLeftMenu() {
  const linkStyles = `w-full group inline-flex h-10 items-center justify-start space-x-3 rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`;
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          className="p-1 h-['10px'] items-center text-white"
          variant="ghost"
        >
          <Icons.Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full" side="left">
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Image
                src={require("../assets/logo1.png")}
                height="75"
                alt="logo"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <NavigationMenu className="flex-col space-y-3 py-3">
          {menuComponents.map(({ title, href, icon }) => (
            <NavigationMenuItem
              key={title}
              className="list-none w-full rounded"
            >
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    pathname === href
                      ? linkStyles + " bg-primary text-white"
                      : linkStyles
                  }
                >
                  <span>{icon}</span> <span>{title}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}

          <Separator className="my-4" />
          {otherComponents.map(({ title, href, icon }) => (
            <NavigationMenuItem
              key={title}
              className="list-none w-full rounded"
            >
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    pathname === href
                      ? linkStyles + " bg-primary text-white"
                      : linkStyles
                  }
                >
                  <span>{icon}</span> <span>{title}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}
