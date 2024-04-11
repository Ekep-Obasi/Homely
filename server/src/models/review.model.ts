import { Review } from '@/domains'
import mongoose, { Schema } from 'mongoose'

export const ReviewShema = new Schema<Review>(
  {
    message: { type: String, required: true },
    likes: { type: Number, default: 0 },
    sender_id: { type: String, required: true },
    sender_name: { type: String, required: true },
    sender_avatar: { type: String },
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

export const ReviewModel = mongoose.model<Review>('review', ReviewShema)
