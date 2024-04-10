'use client'

import { DashBoardMenu } from '@/app/components/layout/DashBoardMenu'
import Footer from '../../components/layout/footer'
import { ThemeProvider } from '../../components/theme-provider'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/app/context/app-context'
import { storage } from '@/app/services/storage'
import { USER_STORAGE_KEY } from '@/app/constants'

interface Props {
  children: React.ReactNode
}

export default function DashBoardLayout({ children }: Props) {
  const { user, setUser } = useApp()
  const router = useRouter()

  // checks if there is a user before the dom is painted
  useEffect(() => {
    const storedUser = storage.get(USER_STORAGE_KEY)
    storedUser !== null ? setUser(storedUser) : user !== null ? storage.set(USER_STORAGE_KEY, user) : router.push('/signup')
  }, [])

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
  )
}
