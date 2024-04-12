import mongoose, { Schema } from 'mongoose'
import { Listing } from '@/domains'

export const ListingSchema = new Schema<Listing>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    image_list: { type: [String], required: true },
    meta: {
      rating: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
    },
    accomodation_count: { type: Number, required: true },
    room_count: { type: Number, default: 0 },
    bed_count: { type: Number, default: 0 },
    bath_count: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    type: { type: String },
    quality: { type: String },
    location: String,
    latitude: { type: Number },
    longitude: { type: Number },
    owner_id: { type: Schema.Types.ObjectId, ref: 'user' },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_, ret) {
        delete ret.updatedAt
        delete ret.__v
      },
    },
  },
)

export const ListingModel = mongoose.model<Listing>('listing', ListingSchema)
