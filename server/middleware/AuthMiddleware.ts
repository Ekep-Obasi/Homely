import { NextFunction, Request, Response } from "express";
import { IAuthPayload } from "../dto";
import { VerifyAuthToken } from "../utility";

/* ------------- Enable user in the request interface of express ------------ */

declare global {
  namespace Express {
    interface Request {
      user?: IAuthPayload;
    }
  }
}

/* ------------------------ Authentication Middleware ----------------------- */

export async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.get("Authorization");

  if (authorization) {
    const token = authorization.split(" ").pop();

    if (token) {
      try {
        const user = (await VerifyAuthToken(token)) as IAuthPayload;
        req.user = user; // set the user on the request stream

        next();
      } catch (err) {
        
        return res.send({ message: "token is invalid" });
      }

      
    } else {
      return res.send("Unable to login user");
    }
  } else {
    return res.send({ message: "login credentials not valid" });
  }
}
