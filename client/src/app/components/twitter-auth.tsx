import React from 'react'
import { TwitterAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth'
import { Button } from './ui/button'
import { RiTwitterFill } from 'react-icons/ri'
import { app } from '../config/firebase'
import { httpClient } from '../config/axios'
import { usePathname } from 'next/navigation'
import { User } from '../types/user'
import { useUserStore, useAppStore } from '../store'

const TwitterOAuth = () => {
  const path = usePathname()
  const { setLoading } = useAppStore()
  const { setUser } = useUserStore()

  const handleTwitterAuth = async () => {
    try {
      setLoading(true)

      const provider = new TwitterAuthProvider()
      const auth = getAuth(app)

      const data = await signInWithRedirect(auth, provider)

      // const requestBody = { ...(path === '/signup' ? {avatar: data.user.photoURL, user_name: data.user.displayName} : {}), email: data.user.email, password: data.user.displayName, auth_method: 'facebook'}

      console.log(data)

      const user = (await httpClient.post(`/user/${path}`, {})) as { data: User }

      setUser(user.data)
    } catch {
      console.log('failed to authenticate')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button type="button" onClick={handleTwitterAuth} variant="outline" className="w-full flex space-x-1 items-center">
      <RiTwitterFill size={18} />
      <span>Twitter</span>
    </Button>
  )
}

export default TwitterOAuth
