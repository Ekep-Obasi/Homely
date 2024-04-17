import { create } from 'zustand'
import { Listing, listingQueries } from '../types/listing'
import { products } from '../constants/product-card'

interface DataStore {
  listings: Listing[]
  setListings: (_: Listing[]) => void
  listingQueries: listingQueries
  setListingQueries: (_: listingQueries) => void
}

type settterTypes = 'setListings' | 'setListingQueries'

const defaultData: Omit<DataStore, settterTypes> = {
  listings: products,
  listingQueries: { limit: 20 },
}

export const useDataStore = create<DataStore>((set) => ({
  ...defaultData,
  setListings: (listings) => set({ listings }),
  setListingQueries: (listingQueries) => set({ listingQueries }),
}))
