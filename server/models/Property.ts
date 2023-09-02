import mongoose, { Document, Schema } from "mongoose";

// Property Doc Types
interface IPropertyDoc extends Document {
  name: string;
  address: string;
  description: string;
  imageList: [string];
  coverImage: string;
  meta: { rating: Number; likes: Number };
  // reviews: any;
  accomodation_count: number;
  room_count: number;
  bed_count: number;
  bath_count: number;
  // location: any;
  price: number;
  // category: any;
  status: string;
}

const PropertyModel = new Schema<IPropertyDoc>({
  name: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageList: { type: [String], required: true },
  coverImage: { type: String, required: true },
  meta: { rating: Number, likes: Number },
  accomodation_count: { type: Number, required: true },
  room_count: { type: Number, required: true },
  bed_count: { type: Number, required: true },
  bath_count: { type: Number, required: true },
  // location: { type: mongoose.SchemaTypes.ObjectId, ref: 'location' },
  price: { type: Number, required: true },
  // category: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: 'category'
  // },
  // reviews: [{
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: 'review'
  // }],
  status: String,
}, {
  timestamps: true,
  toJSON: {
    transform(doc, ret, options) {
      delete ret.createdAt;
      delete ret.updatedAt;
      delete ret.__v;
    },
  }
});


export const Property = mongoose.model<IPropertyDoc>('property', PropertyModel);
