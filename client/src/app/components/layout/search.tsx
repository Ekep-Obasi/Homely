'use client'

import React from 'react'
import { Input } from '../ui/input'
import { useDataStore } from '@/app/store'

export function Search() {
  const { listingQueries, setListingQueries } = useDataStore((s) => s)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    setListingQueries({ ...listingQueries, ...(search ? { search } : {}) })
  }

  return <Input name="search" onChange={handleSearch} placeholder="Search..." />
}
