import React, { ReactNode } from 'react'
import AuthFooter from '@/app/components/layout/auth-footer'

type Props = { children: ReactNode }

const AuthLayout = ({ children }: Props) => {
  return (
    <section>
      <div className="px-12 mb-4">
        <a href="/">
          <img src="/images/logo1.png" width="120px" alt="logo" />
        </a>
      </div>
      <div className="min-h-screen flex flex-col justify-between gap-8">
        {children}
        <AuthFooter />
      </div>
    </section>
  )
}

export default AuthLayout
