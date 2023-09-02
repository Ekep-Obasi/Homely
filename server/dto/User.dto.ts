import { Schema } from "mongoose";

export interface ICreateUserTypes {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type?: string;
  date_of_birth?: string;
  status?: string;
  salt?: string;
  phone?: string;
  adress?: string;
  avatar?: string;
}

export interface ILoginUserTypes {
  email: string;
  password: string;
}

export interface IUserPayload {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type?: string;
  date_of_birth?: string;
  status?: string;
  salt?: string;
  phone?: string;
  adress?: string;
  avatar?: string;
  role?: {
    type: String,
    enum: ['client', 'property-owner'],
    default: 'client'
  }
}
