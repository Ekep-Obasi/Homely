import mongoose, {Document, Schema} from "mongoose";

interface ICategoryDoc {
  name: string,
  description: string,
}

const CategorySchema = new Schema<ICategoryDoc>({
  name: String, 
  description: String,
}, {
  timestamps: true
})

export const Category = mongoose.model<ICategoryDoc>('category', CategorySchema)