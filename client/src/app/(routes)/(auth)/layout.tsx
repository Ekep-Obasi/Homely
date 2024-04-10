import Image from 'next/image'
import React, { ReactNode } from 'react'
import AuthFooter from '../../components/layout/auth-footer'

type Props = { children: ReactNode }

const AuthLayout = ({ children }: Props) => {
  return (
    <section>
      <a href="/" className="ml-[250px]">
        <Image src="/images/logo1.png" width="120" alt="logo" height="50" />
      </a>
      <div className="min-h-screen flex flex-col justify-between gap-8">
        {children}
        <AuthFooter />
      </div>
    </section>
  )
}

export default AuthLayout
