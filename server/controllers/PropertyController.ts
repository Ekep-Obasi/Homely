import { Request, Response, NextFunction } from "express";
import { ICreatePropertyTypes } from "../dto";
import { Property } from "../models";

// get all properties
export async function GetAllProperties(req: Request, res: Response, next: NextFunction) {
  try {
    const properties = await Property.find();

    return res.send(properties);
  } catch (err) {

    return res.send({ message: 'An error occured' })
  }
};

// get property by ID
export async function GetPropertyByID(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;

  try {
    const property = await Property.findById(id);

    return res.send(property);
  } catch (err) {

    return res.send({ message: "An error occured" })
  }
}

// create property
export async function CreateProperty(req: Request, res: Response, next: NextFunction) {
  const { name, description, address, imageList, coverImage, meta, bath_count, accomodation_count, room_count, bed_count, price, status } = <ICreatePropertyTypes>req.body;

  const existingProperty = await Property.findOne({ address: address });

  // check if property already exitst
  if (existingProperty !== null) return res.json({ message: 'this property already exits' });

  const property = await Property.create({ name, description, address, imageList, coverImage, meta, bath_count, accomodation_count, room_count, bed_count, price, status });

  return res.send(property);
}

export function DeleteProperty(req: Response, res: Response, next: NextFunction) {

}