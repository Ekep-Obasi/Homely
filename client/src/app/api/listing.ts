import { AxiosResponse } from 'axios'
import { httpClient } from '../config/axios'
import { Listing, EditListing } from '../types/listing'

export async function createListing(payload: any): Promise<AxiosResponse<any, any>> {
  return await httpClient.post('/property', payload)
}

export async function getAllListings(): Promise<AxiosResponse<Listing[], any>> {
  return await httpClient.get('/property')
}

export async function editListing(payload: EditListing, id: string): Promise<AxiosResponse<any, any>> {
  return await httpClient.patch(`/property${id}`, payload)
}
