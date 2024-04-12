import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { Button } from './ui/button'
import { FcGoogle } from 'react-icons/fc'
import { app } from '../config/firebase'
import { httpClient } from '../config/axios'
import { useApp } from '../context/app-context'
import { User } from '../types/user'

const GoogleOAuth = () => {
  const { setUser } = useApp()

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider()

      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)

      const user = (await httpClient.post(
        '/auth',
        JSON.stringify({
          user_name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
          is_verified: result.user.emailVerified,
        }),
      )) as User

      setUser(user)

      console.log(result)
    } catch {
      console.log('failed to authenticate')
    }
  }

  return (
    <Button onClick={handleGoogleAuth} variant="outline" className="w-full flex space-x-1 items-center">
      <FcGoogle size={18} />
      <span>Google</span>
    </Button>
  )
}

export default GoogleOAuth
