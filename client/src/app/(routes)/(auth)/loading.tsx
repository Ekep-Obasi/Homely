import React from 'react'
import LoaderSpinner from '../../components/loader-spinner'

export default function AuthLoadingPage() {
  return (
    <section>
      <div className="min-h-screen">
        <LoaderSpinner />
      </div>
    </section>
  )
}
