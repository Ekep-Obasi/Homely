import { NextFunction, Request, Response } from 'express'
import { IAuthPayload } from '@/dto'
import { VerifyAuthToken } from '@/utils/token'
import { ErrorResponse } from '@/utils/response'

declare global {
  namespace Express {
    interface Request {
      /**
       * Added user to request stream
       * added express interface
       */
      user?: IAuthPayload
    }
  }
}

/**
 * Authentication middleware, sets user
 * on the response stream
 * @param req - request
 * @param res - response
 * @param next - next
 * @returns
 */

export async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization = req.get('Authorization')

  if (authorization) {
    const token = authorization.split(' ').pop()

    if (token) {
      try {
        const user = (await VerifyAuthToken(token)) as IAuthPayload
        req.user = user

        next()
      } catch (err) {
        return res.send(ErrorResponse(401, 'invalid credentails'))
      }
    } else {
      res.send(ErrorResponse(401, 'invalid credentials'))
    }
  } else {
    return res.send(ErrorResponse(400, 'you must login first'))
  }
}
