import mongoose, { Schema } from 'mongoose'
import { ListingSchema, ReviewShema } from './index'
import { User } from '@/domains'
import { userRoles } from '@/constant'

export const UserSchema = new Schema<User>(
  {
    user_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date_of_birth: { type: mongoose.Schema.Types.Mixed },
    status: { type: String },
    salt: { type: String },
    phone: { type: String },
    address: { type: String },
    avatar: { type: String },
    role: { type: String, enum: userRoles, default: 'client' },
    listings: { type: [ListingSchema] },
    reviews: { type: [ReviewShema] },
    token: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_, ret) {
        delete ret.password
        delete ret.salt
        delete ret.__v
      },
    },
  },
)

export const UserModel = mongoose.model<User>('user', UserSchema)
