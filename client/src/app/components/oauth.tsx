import React from 'react'
import GoogleOAuth from './google-auth'
import TwitterOAuth from './twitter-auth'

const OAuth = () => {
  return (
    <>
      <div
        className="mx-auto my-4 flex w-full items-center justify-evenly
            before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
            after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400"
      >
        or
      </div>
      <div className="flex gap-2">
        <GoogleOAuth />
        <TwitterOAuth />
      </div>
    </>
  )
}

export default OAuth
