import React from 'react'
import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { Button } from './ui/button'
import { MdOutlineFacebook } from 'react-icons/md'
import { app } from '../config/firebase'

const FacebookOAuth = () => {
  const handleFacebookAuth = async () => {
    try {
    } catch {
      const provider = new FacebookAuthProvider()
      const auth = getAuth(app)

      await signInWithPopup(auth, provider)
    }
  }

  return (
    <Button onClick={handleFacebookAuth} variant="outline" className="w-full flex space-x-1 items-center">
      <MdOutlineFacebook size={18} />
      <span>facebook</span>
    </Button>
  )
}

export default FacebookOAuth
