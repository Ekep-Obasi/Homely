import mongoose, { Document, Schema, HydratedDocument, Model } from "mongoose";
import { GenerateSalt, HashPassord } from "../utility";

interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type?: string;
  date_of_birth?: string;
  status: string;
  salt: string;
  phone?: string;
  adress?: string;
  avatar?: string;
  role: {
    type: String,
    enum: ['client', 'property-owner'],
    default: 'client'
  }
}

type IUserDoc = IUser & Document;

interface IUserModel extends Model<IUser> {
  findByEmail(email: string): Promise<HydratedDocument<IUser>>
}


const UserSchema = new Schema<IUser, IUserModel>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_type: String,
  date_of_birth: String,
  status: String,
  salt: String,
  phone: String,
  adress: String,
  avatar: String,
  role: String,
}, {
  timestamps: true,
  toJSON: {
    transform(doc, ret, options) {
      delete ret.password;
      delete ret.salt;
      delete ret.createdAt;
      delete ret.updatedAt;
      delete ret.__v;
    },
  },
});

// get user by Id method
UserSchema.static('findByEmail', function findByEmail(email: string) {
  return this.findOne({ email: email });
});

// Middleware to hash password before saving

UserSchema.pre('save', async function(next) {
  if(this.isModified('password')) {
    try {
      const generatedSalt = await GenerateSalt();

      const hashedPassword = await HashPassord(this.password, generatedSalt);
      
      this.password = hashedPassword; // save hashed Password
      
      this.salt = generatedSalt; // save generated salt

    }catch(err) {
      throw new Error('An error occured while hashing password');
    }    
  }else {
    next();
  }
})

export const User = mongoose.model<IUser, IUserModel>('user', UserSchema)