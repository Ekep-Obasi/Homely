import { AxiosResponse } from 'axios'
import { httpClient } from '../config/axios'

export async function updateUser(payload: FormData): Promise<AxiosResponse<any, any>> {
  return await httpClient.patch('user/profile/edit', payload)
}
