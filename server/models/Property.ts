import mongoose, { Document, Schema } from "mongoose";
import { ReviewShema } from "./Reviews";

export interface IProperty {
  _id?: string;
  name: string;
  address: string;
  description: string;
  image_list: [string];
  meta: { rating: Number; likes: Number };
  reviews: any;
  accomodation_count: number;
  room_count: number;
  bed_count: number;
  bath_count: number;
  price: number;
  category: {
    house_type: "Rooms" | "Studio" | "Apartememts";
    quality: "Minimalist" | "Classic" | "Modern";
  };
  status: string;
  country: string;
  city: string;
  region: string;
  street: string;
  latitude: number;
  longitude: number;
  owner_id: any;
}

type IPropertyDoc = IProperty & Document;

export const PropertySchema = new Schema<IPropertyDoc>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image_list: { type: [String], required: true },
    meta: {
      rating: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
    },
    accomodation_count: { type: Number, required: true },
    room_count: { type: Number, required: true },
    bed_count: { type: Number, required: true },
    bath_count: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      house_type: {
        type: String,
        enum: ["Rooms", "Studio", "Apartement"],
      },
      quality: {
        type: String,
        enum: ["Minimalist", "Classic", "Modern"],
      },
    },
    reviews: { type: [ReviewShema], default: [] },
    status: String,
    country: String,
    city: String,
    region: String,
    street: String,
    latitude: { type: Number },
    longitude: { type: Number },
    owner_id: { type: mongoose.SchemaTypes.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret, options) {
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
  }
);

export const Property = mongoose.model<IPropertyDoc>(
  "property",
  PropertySchema
);
