import { AxiosResponse } from 'axios'
import { httpClient } from '../config/axios'
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '../constants'
import { LOCAL_STORAGE } from '../services/storage'
import { ResetPassword, UserLogin, UserSignUp } from '../types/user'

export async function signUpUser(payload: UserSignUp): Promise<AxiosResponse<any, any>> {
  return await httpClient.post('/user/signup', payload)
}

export async function loginUser(payload: UserLogin): Promise<AxiosResponse<any, any>> {
  return await httpClient.post('/user/login', payload)
}

export async function forgotPassword(payload: { email: string }): Promise<AxiosResponse<any, any>> {
  return await httpClient.post('/user/password-recovery', payload)
}

export async function resetPassword({ id, ...password }: ResetPassword): Promise<AxiosResponse<any, any>> {
  return await httpClient.post(`/user/reset-password/${id}`, password)
}

export function logout() {
  LOCAL_STORAGE.remove(TOKEN_STORAGE_KEY)
  LOCAL_STORAGE.remove(USER_STORAGE_KEY)
}
