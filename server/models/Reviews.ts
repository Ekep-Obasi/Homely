import mongoose, { Document, Schema } from "mongoose";

export interface IReviews {
  id?: string;
  message: string;
  likes?: number;
  sender_id: string;
  sender_name: string;
  sender_avatar: string;
}

type IReviewsDocs = IReviews & Document;

export const ReviewShema = new Schema<IReviewsDocs>(
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
      transform(doc, ret, options) {
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
  }
);

export const Review = mongoose.model<IReviewsDocs>("review", ReviewShema);
