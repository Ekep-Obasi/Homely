import { AxiosResponse } from "axios";
import { httpClient } from "../config/axios";
import { ResetPassword, UserLogin, UserSignUp } from "../types";

export async function signUpUser(
  payload: UserSignUp
): Promise<AxiosResponse<any, any>> {
  return await httpClient.post("/user/signup", payload);
}

export async function loginUser(
  payload: UserLogin
): Promise<AxiosResponse<any, any>> {
  return await httpClient.post("/user/login", payload);
}

export async function forgotPassword(payload: {
  email: string;
}): Promise<AxiosResponse<any, any>> {
  return await httpClient.post("/user/password-recovery", payload);
}

export async function resetPassword(
  {id, ...password}: ResetPassword
): Promise<AxiosResponse<any, any>> {
  return await httpClient.post(`/user/reset-password/${id}`, password);
}

export function logout(payload: any) {}
