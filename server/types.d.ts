/* ------------- Enable user in the request interface of express ------------ */

export declare global {
  namespace Express {
    interface Request {
      user?: IAuthPayload;
    }
  }
}
