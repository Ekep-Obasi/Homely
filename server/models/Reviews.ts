import mongoose, { Document, Schema } from 'mongoose';
import { UserSchema } from './User';

export interface IReviews {
  senderId: string;
  senderName: string;
  message: string;
  likes?: number;
  sender_info: any;
}

type IReviewsDocs = IReviews & Document;

export const ReviewShema = new Schema<IReviewsDocs>({
  senderName: { type: String, required: true },
  message: { types: String, required: true },
  likes: Number,
  sender_info: UserSchema
}, {
  timestamps: true,
  toJSON: {
    transform(doc, ret, options) {
      delete ret.updatedAt;
      delete ret.__v;
    }
  }
});

export const Review = mongoose.model<IReviewsDocs>('review', ReviewShema)