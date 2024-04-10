import { Button } from '../ui/button'
import * as Icons from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { useApp } from '../../context/app-context'
import { generateAcronym } from '../../utils'
import { components, otherComponents, anotherComponent } from './dashboard-drawer'

export function DashboardDrawer() {
  const linkStyles = `w-full group inline-flex h-10 items-center justify-start space-x-3 rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`
  const pathname = usePathname()
  const { user } = useApp()

  return (
    <Sheet>
      <SheetTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn\.png" alt="@shadcn" />
          <AvatarFallback>{generateAcronym(user?.user_name)}</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="flex space-x-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn\.png" alt="@shadcn" />
              <AvatarFallback>{generateAcronym(user?.user_name)}</AvatarFallback>
            </Avatar>
            <p>{user?.user_name}</p>
          </SheetTitle>
        </SheetHeader>

        <NavigationMenu className="flex-col space-y-3 py-3">
          {components.map(({ title, href, icon }) => (
            <NavigationMenuItem key={title} className="list-none w-full rounded">
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={pathname === href ? linkStyles + ' bg-primary text-white' : linkStyles}>
                  <span>{icon}</span> <span>{title}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>

        <Separator className="my-2" />

        <NavigationMenu className="flex-col space-y-3 py-3">
          {otherComponents.map(({ title, href, icon }) => (
            <NavigationMenuItem key={title} className="list-none w-full rounded">
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={pathname === href ? linkStyles + ' bg-primary text-white' : linkStyles}>
                  <span>{icon}</span> <span>{title}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>

        <Separator className="my-2" />

        <NavigationMenu className="flex-col space-y-3 py-3">
          {anotherComponent.map(({ title, href, icon }) => (
            <NavigationMenuItem key={title} className="list-none w-full rounded">
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={pathname === href ? linkStyles + ' bg-primary text-white' : linkStyles}>
                  <span>{icon}</span> <span>{title}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>

        <SheetFooter className="absolute bottom-3">
          <SheetClose asChild>
            <Button variant="ghost" className="w-full flex text-red-500 font-bold hover:text-red-500">
              <Icons.LogOut /> <span>Log-out</span>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
