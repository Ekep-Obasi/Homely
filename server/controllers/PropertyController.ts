import { Request, Response } from "express";
import {
  ICreatePropertyTypes,
  IEditProperty,
  IGetPropertyQueries,
  IPostReviewsTypes,
} from "../dto";
import { IProperty, Property, Review, User } from "../models";

/* ---------------------- Get All Properties Controller --------------------- */

export async function GetAllProperties(
  req: Request<{}, {}, {}, IGetPropertyQueries>,
  res: Response
) {
  const user = req.user;

  const query = req.query;

  if (user) {
    try {
      // no queries

      const properties = (await Property.find()) as [IProperty];

      if (Object.keys(req.query).length === 0) {
        return res.send(properties);
      } else {
        // query

        const filteredProperties = Object.keys(query).flatMap((key) =>
          properties.filter(
            (property) =>
              property[key as keyof IGetPropertyQueries].toLowerCase() ===
              query[key as keyof IGetPropertyQueries]?.toLowerCase()
          )
        );

        res.send(filteredProperties);
      }
    } catch (err) {
      return res.send({ message: "An error occured" });
    }
  } else {
    res.send("Access Denied");
  }
}

/* --------------------------- Get Property By id --------------------------- */

export async function GetPropertyByID(req: Request, res: Response) {
  const user = req.user;

  if (user) {
    const id = req.params.id;

    try {
      const property = await Property.findById(id);

      return res.send(property);
    } catch (err) {
      return res.send({ message: "An error occured" });
    }
  } else {
    return res.send("Access Denied Login first");
  }
}

/* ----------------------------- Create Property ---------------------------- */

export async function CreateProperty(req: Request, res: Response) {
  const user = req.user;

  console.log(user);

  const files = req.files as [Express.Multer.File];

  const images = files.map((file: Express.Multer.File) => file.filename);

  if(!user) return res.status(404).send({message: "Access forbidden!"});

  const existingUser = await User.findByEmail(user.email); 

  if (existingUser !== null) {
    const { address, image_list, ...rest } = <ICreatePropertyTypes>req.body;

    try {
      const existingProperty = await Property.findOne({ address: address });

      // check if the property already exists

      if (existingProperty !== null && existingUser !== null) {
        return res.json({ message: "this property already exits" });
      } else {
        const property = await Property.create({
          address: address,
          image_list: images,
          ...rest,
          owner_id: existingUser._id,
        });

        // push the property created by the user under the properties feild
        existingUser.properties.push(property);

        await existingUser.save();

        console.log(property);

        return res.send(property);
      }
    } catch (err) {
      return res.send("Something went wrong!");
    }
  } else {
    res.send("access denied to create user");
  }
}

/* ----------------------------- Delete Property ---------------------------- */

export function DeleteProperty(req: Response, res: Response) {}

/* ----------------------- Post Review for a Property ----------------------- */

export async function PostPropertyReview(req: Request, res: Response) {
  const user = req.user;

  const { message } = <IPostReviewsTypes>req.body;

  if (user) {
    const property_id = req.params.id;

    try {
      const sender = await User.findByEmail(user.email);

      const review = await Review.create({
        message: message,
        sender_id: sender.id,
        sender_name: sender.first_name,
        sender_avatar: sender.avatar,
      });

      const property = await Property.findById(property_id);

      // check if property exist && a user should not review about his property

      if (
        property !== null &&
        sender.properties.find(
          (_property: IProperty) => _property._id === property._id
        ) === undefined
      ) {
        property.reviews.push(review);

        await property.save();

        res.send(review);
      } else {
        return res.send({
          message:
            "This property does not exist or you are trying to post a review about your property",
        });
      }
    } catch (err) {
      return res.send({
        message: "something went wrong when trying to post a review",
      });
    }
  } else {
    return res.send({ message: "Access denied" });
  }
}

/* -------------------------- Edit Properties Route ------------------------- */

export async function EditProperties(req: Request, res: Response) {
  const user = req.user;

  const payload = <IEditProperty>req.body;

  if (user) {
    const property_id = req.params.id;

    try {
      const existingProperty = await Property.findById(property_id);

      if (existingProperty) {
        const updatedProperty = await Property.findOneAndUpdate(existingProperty._id, payload);

        res.status(200).send(updatedProperty);
      }
    } catch (err) {
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res.send({ message: "Unauthorised user" });
  }
}

/* ------------------------------ Like Property ----------------------------- */

export async function LikeProperty(req: Request, res: Response) {
  const user = req.user;

  if (user) {
    const property = await Property.findById(req.params.id);

    if (typeof property?.meta.likes === "number") {
      let likes = property?.meta?.likes;
      likes += 1;

      property.meta.likes = likes;

      const updatedProperty = await property.save();

      res.send(updatedProperty);
    } else {
      res.send({ message: "This property does not exist" });
    }
  } else {
    res.send({ message: "You must sign up first" });
  }
}
