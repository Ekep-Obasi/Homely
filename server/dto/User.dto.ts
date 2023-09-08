import { IsEmail, Length } from "class-validator";

export class CreateUserInputs {

  @IsEmail() email: string;

  @Length(7, 12) phone: string;

  @Length(9, 12) password: string;
  
}

export interface ICreateUserTypes {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface ILoginUserTypes {
  email: string;
  password: string;
}

export interface IAuthPayload {
  email: string;
  password: string;
}

export interface IUserPayload {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth?: string;
  status?: string;
  salt?: string;
  phone?: string;
  adress?: string;
  avatar?: string;
  role?: "client" | "property-owner";
}

export interface IEditUserTypes {
  first_name: string;
  last_name: string;
  address: string;
}
