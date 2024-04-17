export interface UserSignUp {
  user_name: string
  email: string
  password: string
  auth_method: string
}

export interface UserLogin {
  email: string
  password: string
}

export interface User {
  user_name: string
  email: string
  phone: string
  address: string
  avatar: string
  role: string
  _id: string
  password?: string
  status?: string
  listings?: any
  reviews?: any
  token?: string
}

export interface ResetPassword {
  id: string
  password: string
}
