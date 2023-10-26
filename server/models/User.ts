import mongoose, { Document, Schema, HydratedDocument, Model } from "mongoose";
import { PropertySchema } from "./index";
import { ReviewShema } from "./Reviews";

export interface IUser {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth?: string | Date;
  status: string;
  salt: string;
  phone?: string;
  address?: string;
  avatar?: string;
  role: "client" | "property-owner";
  properties: any;
  reviews: any;
  token: string;
}

type IUserDoc = IUser & Document;

interface IUserModel extends Model<IUser> {
  findByEmail(email: string): Promise<HydratedDocument<IUser>>;
}

/* ------------------------------- User Schema ------------------------------ */

export const UserSchema = new Schema<IUser, IUserModel>(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date_of_birth: { type: mongoose.Schema.Types.Mixed, default: "" },
    status: { type: String, default: "" },
    salt: { type: String, default: "" },
    phone: { type: String, default: "" },
    address: { type: String, default: "" },
    avatar: { type: String, default: "" },
    role: {
      type: String,
      enum: ["client", "property-owner"],
      default: "client",
    },
    properties: { type: [PropertySchema], default: [] },
    reviews: {
      type: [ReviewShema],
      default: [],
    },
    token: { type: String, default: "" },
  },
  {
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
  }
);

/* -------------------------- get user by id method ------------------------- */

UserSchema.static("findByEmail", function findByEmail(email: string) {
  return this.findOne({ email: email });
});

/* ---------------- Middleware to hash password before saving --------------- */

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     try {
//       const generatedSalt = await GenerateSalt();

//       const hashedPassword = await HashPassord(this.password, generatedSalt);

//       this.password = hashedPassword; // save hashed Password

//       this.salt = generatedSalt; // save generated salt
//     } catch (err) {
//       throw new Error("An error occured while hashing password");
//     }
//   } else {
//     next();
//   }
// });

export const User = mongoose.model<IUser, IUserModel>("user", UserSchema);
