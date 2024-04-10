'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'
import { NavigationMenuLink } from '../ui/navigation-menu'

export const components: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Overview',
    href: '/dashboard',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Buy',
    href: '/dashboard/buy',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Rent',
    href: '/dashboard/rent',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Sell',
    href: '/dashboard/sell',
    description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Find An agent',
    href: '/dashboard/find-agent',
    description: 'Visually or semantically separates content.',
  },
]

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
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
})
ListItem.displayName = 'ListItem'
