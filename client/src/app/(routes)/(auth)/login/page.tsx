import LoginForm from '@/app/components/forms/loginForm'
import React from 'react'

export default function Login() {
  return (
    <div className="flex flex-col space-y-3 justify-center items-center mt-4">
      <LoginForm />
      <div className="text-sm mx-auto">
        Do you have an account? &nbsp;
        <a href="/signup" className=" text-blue-400 hover:underline">
          sign up
        </a>
      </div>
    </div>
  )
}
