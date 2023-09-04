import express, { Express } from "express";
import mongoose from "mongoose";
import dotEnv from "dotenv";
import { PropertyRouter } from "./routes";
import { UserRouter } from "./routes/UserRoute";
import path from "path";
import { MONGODB_URI, PORTNUMBER } from "./constant";
dotEnv.config();

const app: Express = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/property", PropertyRouter);

app.listen(PORTNUMBER, () => {
  console.clear();
  console.log(`server is running on port ${PORTNUMBER}`);
});

(async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connected to MongoDB succesfully!");
  } catch (error) {
    console.log(error);
  }
})();
