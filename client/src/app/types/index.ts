export * from './user'
export interface Location {
  latitude: number
  longitude: number
}

export interface ApiResponse<T> {
  data: {
    statusCode: number
    message: string
    data: T
  }
}
