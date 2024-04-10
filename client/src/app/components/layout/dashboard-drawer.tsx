import * as Icons from 'lucide-react'

interface componentProps {
  title: string
  icon: React.ReactNode
  href: string
}

export const components: componentProps[] = [
  {
    title: 'Your Profile',
    icon: <Icons.User2 />,
    href: 'dashboard/profile',
  },
  {
    title: 'Your Properties',
    icon: <Icons.Home />,
    href: '/profile',
  },
  {
    title: 'Your Transactions',
    icon: <Icons.HeartHandshake />,
    href: '/profile',
  },
  {
    title: 'My Favourites',
    icon: <Icons.Star />,
    href: '/profile',
  },
]

export const otherComponents: componentProps[] = [
  {
    title: 'Notifications',
    icon: <Icons.Bell />,
    href: '/',
  },
  {
    title: 'Messages',
    icon: <Icons.MessageCircle />,
    href: '/',
  },
]

export const anotherComponent: componentProps[] = [
  {
    title: 'Settings',
    icon: <Icons.Settings />,
    href: '/',
  },
]
