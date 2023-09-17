export interface UserSignUp {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  first_name?: string;
  last_name?: string;
  email?: string;
  date_of_birth?: string;
  status?: string;
  phone?: string;
  address?: string;
  avatar?: string;
  role?: string;
  _id?: string;
  properties?: any;
  reviews?: any;
  token?: string;
}

export interface ResetPassword {
  id: string;
  password: string;
}
