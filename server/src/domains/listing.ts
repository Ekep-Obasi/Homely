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
  type: ListingTypeEnum
  quality: ListingQualityEnum
  location: string
  latitude: number
  longitude: number
  owner_id: any
  createdAt: string
}

export enum ListingTypeEnum {
  ROOM = 'room',
  STUDIO = 'studio',
  APARTMENT = 'apartement',
}

export enum ListingQualityEnum {
  MINIMALIST = 'minimalist',
  CLASSIC = 'classic',
  MODERN = 'modern',
}
