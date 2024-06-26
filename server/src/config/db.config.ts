import mongoose from 'mongoose'
import { MONGODB_URI } from '@/constant'

export default async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('connected to MongoDB succesfully!')
  } catch (error) {
    console.log(error)
  }
}
