import { ListingQualityEnum, ListingTypeEnum } from '@/domains'
import { IsArray, IsEnum, IsNumber, IsString, Length, Max, Min } from 'class-validator'

export class CreateListingPayload {
  @IsString()
  @Length(10, 100, { message: 'listing name must be greater than 10 characters' })
  name: string

  @IsString()
  address: string

  @IsString()
  @Length(25, 255, { message: 'listing name must be between 25 - 100 characters' })
  description: string

  @IsArray()
  image_list: string[]

  @IsNumber()
  @Min(0)
  accomodation_count: number

  @IsNumber()
  @Min(0)
  room_count: number

  @IsNumber()
  @Min(0)
  bed_count: number

  @IsNumber()
  @Min(0)
  bath_count: number

  @IsEnum(ListingTypeEnum)
  type: ListingTypeEnum

  @IsEnum(ListingQualityEnum)
  quality: ListingQualityEnum

  @IsNumber()
  @Min(0)
  price: number

  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number

  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number
}

export class EditListingPayload {
  @IsString()
  @Length(10, 100, { message: 'listing name must be greater than 10 characters' })
  name: string

  @IsString()
  address: string

  @IsString()
  @Length(25, 255, { message: 'listing name must be between 25 - 100 characters' })
  description: string

  @IsNumber()
  @Min(0)
  accomodation_count: number

  @IsNumber()
  @Min(0)
  room_count: number

  @IsNumber()
  @Min(0)
  bed_count: number

  @IsNumber()
  @Min(0)
  bath_count: number

  @IsEnum(ListingTypeEnum)
  type: ListingTypeEnum

  @IsEnum(ListingQualityEnum)
  quality: ListingQualityEnum

  @IsNumber()
  @Min(0)
  price: number
}

export interface ListingQuery {
  sortBy?: 'asc' | 'desc'
  type?: ListingTypeEnum
  quality?: ListingTypeEnum
  limit?: number
  search?: string
}
