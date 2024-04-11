import { NextFunction, Request, Response } from 'express'
import { IAuthPayload } from '../dto/index.js'
import { VerifyAuthToken } from '../utils/index.js'

/* ------------- Enable user in the request interface of express ------------ */

declare global {
  namespace Express {
    interface Request {
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
        return res.status(404).send({ message: 'token is invalid' })
      }
    } else {
      return res.status(500).send('Unable to login user')
    }
  } else {
    return res.status(404).send({ message: 'login credentials not valid' })
  }
}
