import React, { ReactNode } from 'react'

type Props = { children: ReactNode }

const AuthLayout = ({ children }: Props) => {
  return (
    <section className="min-h-screen mb-8">
      <div className="flex px-8 justify-center lg:px-12 lg:justify-start mb-2">
        <a href="/">
          <img src="/images/logo1.png" width="115px" alt="logo" />
        </a>
      </div>
      <div className="flex flex-col justify-between items-center">{children}</div>
    </section>
  )
}

export default AuthLayout
