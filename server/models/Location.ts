import mongoose, { Document, Schema } from "mongoose";

interface ILocationDoc extends Document {
  name: string,
  description: string,
  country: string,
  city: string,
  region: string,
  street: string,
  latitude: number,
  longitude: number,
}

const LocationModel = new Schema<ILocationDoc>({
  name: String,
  description: String,
  country: String,
  city: String,
  region: String,
  street: String,
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
}, {
  timestamps: true
});

export const Location = mongoose.model<ILocationDoc>('location', LocationModel)