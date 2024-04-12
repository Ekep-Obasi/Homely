import mongoose, { Schema } from 'mongoose'
import { ListingSchema, ReviewShema } from './index'
import { User } from '@/domains'
import { authMethods, defaultAvatar, userRoles } from '@/constant'

export const UserSchema = new Schema<User>(
  {
    user_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String },
    salt: { type: String },
    phone: { type: String },
    address: { type: String },
    avatar: { type: String, default: defaultAvatar },
    role: { type: String, enum: userRoles, default: 'client' },
    listings: [{ type: Schema.Types.ObjectId, ref: 'listing' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'review' }],
    token: { type: String },
    auth_method: { type: String, enum: authMethods },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_, ret) {
        delete ret.auth_method
        delete ret.password
        delete ret.salt
        delete ret.__v
      },
    },
  },
)

export const UserModel = mongoose.model<User>('user', UserSchema)
