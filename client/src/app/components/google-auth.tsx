import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { Button } from './ui/button'
import { FcGoogle } from 'react-icons/fc'
import { app } from '../config/firebase'
import { httpClient } from '../config/axios'
import { useUserStore } from '../store'
import { User } from '../types/user'
import { usePathname, useRouter } from 'next/navigation'
import { ApiResponse } from '../types/index'

const GoogleOAuth = () => {
  const { setUser } = useUserStore()
  const path = usePathname()
  const router = useRouter()

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider()

      const auth = getAuth(app)

      localStorage.clear()

      const result = await signInWithPopup(auth, provider)

      const requestBody = {
        ...(path === '/signup'
          ? {
              user_name: result.user.displayName,
              avatar: result.user.photoURL,
              auth_method: 'google',
            }
          : {}),
        email: result.user.email,
        password: result.user.displayName?.slice(0, 11),
      }

      const user = (await httpClient.post(`/user/${path}`, requestBody)) as ApiResponse<User>

      setUser(user.data.data)

      router.push('/dashboard')
    } catch {
      console.log('failed to authenticate')
    }
  }

  return (
    <Button type="button" onClick={handleGoogleAuth} variant="outline" className="w-full flex space-x-1 items-center">
      <FcGoogle size={18} />
      <span>Google</span>
    </Button>
  )
}

export default GoogleOAuth
