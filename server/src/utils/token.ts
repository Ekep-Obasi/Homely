import jwt from 'jsonwebtoken'
import { IAuthPayload } from '@/dto'
import { JWT_SECRETE_KEY } from '@/constant'

export const SignAuthToken = (payload: IAuthPayload) => {
  return jwt.sign(payload, JWT_SECRETE_KEY, { expiresIn: '1d' })
}

export const VerifyAuthToken = async (token: string) => {
  return await jwt.verify(token, JWT_SECRETE_KEY)
}
