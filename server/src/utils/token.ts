import jwt from 'jsonwebtoken'
import { IAuthPayload } from '@/dto'
import { JWT_SECRETE_KEY } from '@/constant'

/**
 * Signs an authentication token using JWT with the provided payload.
 * @param {IAuthPayload} payload The payload to include in the token.
 * @returns {string} The signed authentication token.
 */
export const SignAuthToken = (payload: IAuthPayload): string => {
  return jwt.sign(payload, JWT_SECRETE_KEY, { expiresIn: '1d' })
}

/**
 * Verifies the authenticity of an authentication token using JWT.
 * @param {string} token The authentication token to verify.
 * @returns {Promise<any>} A promise that resolves to the decoded token payload if verification is successful.
 */
export const VerifyAuthToken = async (token: string): Promise<any> => {
  return await jwt.verify(token, JWT_SECRETE_KEY)
}
