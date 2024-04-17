import { User } from '.'

export type listingQuality = 'minimalist' | 'classic' | 'modern' | ''
export type listingTypes = 'room' | 'studio' | 'apartement' | string

interface listingQueries {
  sortBy?: 'asc' | 'desc'
  type?: listingTypes
  quality?: listingQuality
  limit?: number
  search?: string
}

export type listingCategoryTypes = {
  label: string
  value: listingQuality
}

export interface Listing {
  _id: string
  name: string
  address: string
  description: string
  image_list: string[]
  meta: { rating: number; likes: number }
  reviews: any
  accomodation_count: number
  room_count: number
  bed_count: number
  bath_count: number
  price: number
  house_type: listingQuality
  quality: listingQuality
  status: string
  country: string
  city: string
  region: string
  street: string
  latitude: number
  longitude: number
  owner_id: User
  availability: string
}

export interface EditListing {}
