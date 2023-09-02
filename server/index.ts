import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotEnv from 'dotenv';
import { PropertyRouter } from './routes';
import { UserRouter } from './routes/UserRoute';
dotEnv.config();

const app: Express = express();
const PORTNUMBER = process.env.PORT_NUMBER || 5000;
const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING || '';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', UserRouter)
app.use('/api/v1/property', PropertyRouter)

app.listen(PORTNUMBER, () => {
  console.clear()
  console.log(`server is running on port ${PORTNUMBER}`)
});

(async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connected to MongoDB succesfully!");
  }
  catch (error) {
    console.log(error);
  }
})();