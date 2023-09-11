import { AxiosResponse } from "axios";
import { httpClient } from "../config/axios";
import { UserLogin, UserSignUp } from "../types/.";

export async function signUpUser(
  payload: UserSignUp
): Promise<AxiosResponse<any, any>> {
  return await httpClient.post("/user/signup", payload);
}

export function loginUser(payload: UserLogin) {
  return httpClient.post("/user/login", payload);
}

export function logout(payload: any) {}

export function forgotPassword(payload: any) {}
