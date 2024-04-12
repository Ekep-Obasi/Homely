import { authMethods } from '@/domains'
import { IsEmail, IsEnum, IsPhoneNumber, IsString, Length, Max, Min } from 'class-validator'

export class LoginUserPayload {
  @IsEmail()
  email: string

  @Length(9, 12)
  password: string
}

export class CreateUserPayload extends LoginUserPayload {
  @IsString()
  @Length(4, 35)
  user_name: string

  @IsEnum(authMethods)
  auth_method: authMethods
}

export class EditUserPayload {
  @IsString()
  @Length(4, 10)
  user_email: string

  @IsEmail()
  email: string

  @IsString()
  status: string

  @IsPhoneNumber('CM')
  phone?: string

  @IsString()
  address?: string

  @IsString()
  avatar?: string

  @IsString()
  role: 'client' | 'property-owner'
}

export interface IAuthPayload {
  id: string | undefined
  email: string
}

export class IPasswordRecovery {
  @IsEmail()
  email: string
}
