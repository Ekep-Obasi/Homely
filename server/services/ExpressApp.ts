import express, { Application, Express } from "express";
import { UserRouter, PropertyRouter } from "../routes";
import path from "path";

export default async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/images", express.static(path.join(__dirname, "images")));

  app.use("/api/v1/user", UserRouter);
  app.use("/api/v1/property", PropertyRouter);
};
