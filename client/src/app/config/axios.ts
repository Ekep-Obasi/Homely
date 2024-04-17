import axios from 'axios'
import { API_BASE_URL, TOKEN_STORAGE_KEY } from '@/app/constants'
import { storage } from '@/app/services/storage'

export const httpClient = axios.create({ baseURL: API_BASE_URL })
const token = storage.get(TOKEN_STORAGE_KEY)

// httpClient.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer: ${token}`
//     console.log(config)
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )
