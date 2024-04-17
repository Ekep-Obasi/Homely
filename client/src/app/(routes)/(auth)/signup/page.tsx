import SignUpForm from '@/app/components/forms/signUpForm'
import React from 'react'

type Props = {}

export default function SignUp({}: Props) {
  return (
    <div className="flex flex-col space-y-3 justify-center items-center mt-2">
      <SignUpForm />
      <p className="text-sm text-auto mx-auto">
        Already Have An account?
        <a href="/login" className="text-blue-400 ml-1 hover:underline">
          Login
        </a>
      </p>
    </div>
  )
}
