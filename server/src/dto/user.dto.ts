import { IsEmail, Length } from 'class-validator'

export class CreateUserInputs {
  @IsEmail() email: string

  @Length(7, 12) phone: string

  @Length(9, 12) password: string
}

export interface ICreateUserTypes {
  user_name: string
  email: string
  password: string
}

export interface ILoginUserTypes {
  email: string
  password: string
}

export interface IAuthPayload {
  id: string
  email: string
  password: string
}

export interface IUserPayload {
  _id: string
  user_name: string
  email: string
  password: string
  date_of_birth?: string
  status?: string
  salt?: string
  phone?: string
  adress?: string
  avatar?: string
  role?: 'client' | 'property-owner'
}

export interface IEditUserTypes {
  user_name: string
  password?: string
  date_of_birth?: string
  status?: string
  salt?: string
  phone?: string
  adress?: string
  avatar?: string
  role?: 'client' | 'property-owner'
}

export class IPasswordRecovery {
  @IsEmail() email: string
}
