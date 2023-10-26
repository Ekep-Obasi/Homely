import jwt from 'jsonwebtoken';
import dotEnv from 'dotenv';
import { IAuthPayload } from "../dto";
dotEnv.config();

const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY as string;

export const SignAuthToken = (payload: IAuthPayload) => {
  return jwt.sign(payload, JWT_SECRETE_KEY, { expiresIn: "1d" });
}

export const VerifyAuthToken = async (token: string) => {
  return await jwt.verify(token, JWT_SECRETE_KEY);
}