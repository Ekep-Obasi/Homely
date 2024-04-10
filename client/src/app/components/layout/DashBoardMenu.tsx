'use client'
import * as React from 'react'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { ModeToggle } from '../mode-toggle'
import { DashboardDrawer } from './DashboardDrawer'
import { DashboardLeftMenu } from './dashboard-left-drawer'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import { Search } from './search'
import { usePathname } from 'next/navigation'
import { useApp } from '../../context/app-context'
import { components } from './dashboard-menubar'

export function DashBoardMenu() {
  const urlRef = React.useRef<string>('')
  const pathname = usePathname()
  const { user } = useApp()

  console.log(pathname)

  React.useEffect(() => {
    urlRef.current = window.location.href
  }, [])

  return (
    <NavigationMenu className="bg-primary w-full flex-row items-center py-2 pb-0">
      <div className="flex justify-between px-2">
        <div className="flex text-primary">
          <NavigationMenuItem className="flex justify-center items-center">
            <DashboardLeftMenu />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center">
            <Link href="/">
              <Image src="/images/white-logo.png" height="50" alt="homely" />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center">
            <Button variant="ghost" className="text-white">
              {user?.user_name}
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
                className={pathname === href ? `${navigationMenuTriggerStyle()} border-b-2 border-yellow-500` : navigationMenuTriggerStyle()}
              >
                {title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </div>
    </NavigationMenu>
  )
}
