import { NextFunction, Request, Response } from "express";
import { IAuthPayload } from "../dto";
import { VerifyAuthToken } from "../utility";


// enable user in the request interface of express
declare global {
  namespace Express {
    interface Request {
      user?: IAuthPayload
    }
  }
}

export default async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization = req.get('Authorization');

  if (authorization) {

    const token = authorization.split(' ').pop();

    if (token) {
      const user = await VerifyAuthToken(token) as IAuthPayload;

      req.user = user;

      next();
    } else {

      return res.send('Unable to login user');
    }
  }


  return res.send({ message: "login credentials not valid" });
}