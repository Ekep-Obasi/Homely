import { ThouseQuality, ThouseType } from '@/domains'

export interface CreateListingPayload {
  name: string
  address: string
  description: string
  image_list: string[]
  accomodation_count: number
  room_count: number
  bed_count: number
  bath_count: number
  house_type: ThouseType
  quality: ThouseQuality
  price: number
  latitude: number
  longitude: number
}

export interface ListingQuery {
  sortyBy?: 'asc' | 'desc'
  type?: ThouseType
  quality?: ThouseQuality
  limit?: number
}
