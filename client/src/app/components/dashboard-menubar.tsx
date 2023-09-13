"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { DashboardDrawer } from "./dashboard-drawer";
import { DashboardLeftMenu } from "./dashboard-left-drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import { Bell } from "lucide-react";
import { Search } from "./search";
import { usePathname } from "next/navigation";
import { useApp } from "../context/app-context";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Overview",
    href: "/dashboard",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Buy",
    href: "/dashboard/buy",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Rent",
    href: "/dashboard/rent",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Sell",
    href: "/dashboard/sell",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Find An agent",
    href: "/dashboard/find-agent",
    description: "Visually or semantically separates content.",
  },
];

export function DashBoardMenu() {
  const urlRef = React.useRef<string>("");
  const pathname = usePathname();
  const { user } = useApp();

  console.log(pathname);

  React.useEffect(() => {
    urlRef.current = window.location.href;
  }, []);

  return (
    <NavigationMenu className="bg-primary w-full flex-row items-center py-2 pb-0">
      <div className="flex justify-between px-2">
        <div className="flex text-primary">
          <NavigationMenuItem className="flex justify-center items-center">
            <DashboardLeftMenu />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center">
            <Link href="/">
              <Image
                src={require("../../app/assets/white-logo.png")}
                height="50"
                alt="homely"
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center">
            <Button variant="ghost" className="text-white">
              {user?.first_name}
            </Button>
          </NavigationMenuItem>
        </div>

        <div className="flex space-x-2">
          <NavigationMenuItem className="flex justify-center items-center">
            <Search />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center">
            <Button className="px-1" variant="outline">
              <Bell />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center">
            <ModeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center">
            <DashboardDrawer />
          </NavigationMenuItem>
        </div>
      </div>

      <div className="flex">
        {components.map(({ title, href }) => (
          <NavigationMenuItem className="list-none" key={title}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  pathname === href
                    ? `${navigationMenuTriggerStyle()} border-b-2 border-yellow-500`
                    : navigationMenuTriggerStyle()
                }
              >
                {title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
