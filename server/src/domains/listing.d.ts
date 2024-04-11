export interface Listing {
  _id?: string
  name: string
  address: string
  description: string
  image_list: string[]
  meta: { rating: Number; likes: Number }
  reviews: any
  accomodation_count: number
  room_count: number
  bed_count: number
  bath_count: number
  price: number
  house_type: ThouseType
  quality: ThouseQuality
  location: string
  latitude: number
  longitude: number
  owner_id: any
}

export type ThouseType = 'Rooms' | 'Studio' | 'Apartememts'
export type ThouseQuality = 'Minimalist' | 'Classic' | 'Modern'
