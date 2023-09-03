import { Request, Response, NextFunction } from "express";
import { ICreatePropertyTypes } from "../dto";
import { Property, User } from "../models";

// get all properties
export async function GetAllProperties(req: Request, res: Response, next: NextFunction) {

  const user = req.user;

  if (user) {
    try {
      const properties = await Property.find();

      return res.send(properties);
    } catch (err) {

      return res.send({ message: 'An error occured' })
    }
  } else {

    res.send("Access Denied")
  }
};

// get property by ID
export async function GetPropertyByID(req: Request, res: Response, next: NextFunction) {

  const user = req.user;

  if (user) {

    const id = req.params.id;

    try {

      const property = await Property.findById(id);

      return res.send(property);

    } catch (err) {

      return res.send({ message: "An error occured" })
    }

  } else {

    return res.send("Access Denied Login first");
  }


}

// create property
export async function CreateProperty(req: Request, res: Response, next: NextFunction) {

  const user = req.user;

  if (user) {
    const { name, description, address, imageList, coverImage, meta, bath_count, accomodation_count, room_count, bed_count, price, status } = <ICreatePropertyTypes>req.body;

    try {
      const existingProperty = await Property.findOne({ address: address });

      const existingUser = await User.findByEmail(user.email);

      // check if the property already exists
      if (existingProperty !== null && existingUser !== null) {

        return res.json({ message: 'this property already exits' });
      } else {

        const property = await Property.create({ name, description, address, imageList, coverImage, meta, bath_count, accomodation_count, room_count, bed_count, price, status });

        // push the property created by the user under the properties feild 
        existingUser.properties.push(property);

        await existingUser.save()

        return res.send(property);
      }

    } catch (err) {

      return res.send("Something went wrong");
    }

  } else {

    res.send("access denied to create user")
  }


}

export function DeleteProperty(req: Response, res: Response, next: NextFunction) {

  // const user = req.user;

  // if(user) {



  // }else {
  //   return res.send('Access Denied to delete')
  // }

}