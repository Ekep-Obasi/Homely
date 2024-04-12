import { Listing } from './listing'
import { Review } from './review'

export interface User {
  _id?: string
  user_name: string
  email: string
  password: string
  status: string
  salt: string
  phone?: string
  address?: string
  avatar?: string
  role: 'client' | 'property-owner'
  listings: string[] // listing schema ref
  reviews: string[] // review schema ref
  token: string
  auth_method: authMethods
}

export type UserRoleTypes = 'tenant' | 'landloard'

export enum authMethods {
  'EMAIL-PASSWORD' = 'email-and-password',
  'GOOGLE' = 'google',
  'FACEBOOK' = 'facebook',
}
