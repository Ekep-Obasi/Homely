'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'
import { NavigationMenuLink } from '../ui/navigation-menu'

export const components: {
  title: string
  href: string
}[] = [
  {
    title: 'Overview',
    href: '/dashboard',
  },
  {
    title: 'Buy',
    href: '/dashboard/buy',
  },
  {
    title: 'Rent',
    href: '/dashboard/rent',
  },
  {
    title: 'Sell',
    href: '/dashboard/sell',
  },
  {
    title: 'Find An agent',
    href: '/dashboard/find-agent',
  },
]

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
