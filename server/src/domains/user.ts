import { Review } from './review'

export interface User {
  id?: string
  user_name: string
  email: string
  password: string
  date_of_birth?: string | Date
  status: string
  salt: string
  phone?: string
  address?: string
  avatar?: string
  role: 'client' | 'property-owner'
  listings: any
  reviews: Review[]
  token: string
}

export type UserRoleTypes = 'tenant' | 'landloard'
