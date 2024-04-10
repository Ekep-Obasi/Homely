'use client'

import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

export default function LoaderSpinner() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <MutatingDots
        height="100"
        width="100"
        color="#0f182a"
        secondaryColor="#0f182a"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}
