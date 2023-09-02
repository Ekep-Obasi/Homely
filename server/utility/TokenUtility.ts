import jwt from 'jsonwebtoken';
import { IUserPayload } from "../dto";

const JWT_SECRETE_KEY = process.env.MONGODB_CONNECTION_STRING || "";

export const SignToken = async (payload: IUserPayload) => {
  return await jwt.sign(payload, JWT_SECRETE_KEY);
}

export const VerifyToken = async (token: string) => {
  return await jwt.verify(token, JWT_SECRETE_KEY);
}