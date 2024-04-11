import * as dotEnv from 'dotenv'

dotEnv.config()

export const PORTNUMBER = process.env.PORT_NUMBER
export const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY as string
export const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING
export const SENDGRID_API_KEY = process.env.SEND_GRID_API_KEY
export const CLIENT_BASE_URL = process.env.CLIENT_BASE_URL

export const houseQuality = ['Minimal', 'Classic', 'Modern'] as const
export const houseType = ['Room', 'Studio', 'Apartements'] as const
export const userRoles = ['client', 'landloard'] as const
export const authMethods = ['email-and-password', 'google', 'facebook'] as const
