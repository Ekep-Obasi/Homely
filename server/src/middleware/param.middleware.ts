import { formatResponse } from '@/utils/response'
import { NextFunction, Request, Response } from 'express'
import { Types } from 'mongoose'

export const ValidateParamMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  if (!id) {
    return res.send(formatResponse(400, 'Invalid Request: id is missing', null))
  }

  if (!Types.ObjectId.isValid(id)) {
    return res.send(formatResponse(400, 'Invalid Request: id is invalid', null))
  }
  next()
}

export default ValidateParamMiddleware
