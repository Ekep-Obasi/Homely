import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { Request, Response, NextFunction, request, response } from "express";
import {
  CreateUserInputs,
  ICreateUserTypes,
  IEditUserTypes,
  ILoginUserTypes,
  IPostReviewsTypes,
} from "../dto";
import { Review, User } from "../models";
import { SignAuthToken, ValidatePassword } from "../utility";

/* -------------------------- Create User with OTP -------------------------- */

export default async function SignUpUser(req: Request, res: Response) {
  const userInputs = plainToClass(CreateUserInputs, req.body);

  const inputErrors = await validate(userInputs, {
    validationError: { target: true },
  });

  if (inputErrors.length > 0) {
    res.status(400).send(inputErrors);
  }

  const {email, password, phone} = userInputs;  

  // const user = await User.create({
  //   first_name,
  //   last_name,
  //   email,
  //   password,
  // });
}

/* ------------------------------- SignUp User ------------------------------ */

export async function CreateUser(req: Request, res: Response) {
  const { first_name, last_name, email, password } = <ICreateUserTypes>req.body;

  // check for existing user
  const existingUser = await User.findByEmail(email);

  if (existingUser !== null)
    return res.send({ message: "user already exits with this email" });

  try {
    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });

    res.send(user);
  } catch (err) {
    res.send({ message: "An error occured in creating user", err: err });
  }
}

/* ------------------------------ Get All Users ----------------------------- */

export async function GetAllUsers(req: Request, res: Response) {
  try {
    const users = await User.find();

    return res.send(users);
  } catch (err) {
    return res.send({ message: "An error occured in all users" });
  }
}

/* ----------------------------- Get User By Id ----------------------------- */

export async function GetUserID(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    return res.send(user);
  } catch (err) {
    res.send({ message: "An error occured in id" });
  }
}

/* ------------------------------- Login User ------------------------------- */

export async function UserLogin(req: Request, res: Response) {
  const { email, password } = <ILoginUserTypes>req.body;

  try {
    // check if user exists in database
    const existingUser = await User.findByEmail(email);

    if (existingUser !== null) {
      // compare saved and entered password
      const isValidPassword = await ValidatePassword(
        password,
        existingUser.password,
        existingUser.salt
      );

      if (isValidPassword) {
        const token = SignAuthToken({
          password: existingUser.password,
          email: existingUser.email,
        });

        return res.send(token);
      } else {
        return res.send({ message: "email or password is incorrect" });
      }
    } else {
      return res.send({ message: "access forbiden" });
    }
  } catch (err) {
    res.send({ message: "An error occured from somewhere" });
  }
}

/* ---------------------------- Get User Profile ---------------------------- */

export async function GetUserProfile(req: Request, res: Response) {
  const user = req.user;

  if (user) {
    const data = await User.findByEmail(user.email);

    return res.send(data);
  }

  return res.send({ message: "Unable to find user data" });
}

/* ---------------------------- Edit User Profile --------------------------- */

export async function EditUserProfile(req: Request, res: Response) {
  const user = req.user;

  if (user) {
    try {
      const fullUserData = await User.findByEmail(user.email);

      const { first_name, last_name, address } = <IEditUserTypes>req.body;

      fullUserData.first_name = first_name;
      fullUserData.last_name = last_name;
      fullUserData.address = address;

      const updatedUser = await fullUserData.save();

      res.send(updatedUser);
    } catch (err) {
      res.send("Internal server error");
    }
  } else {
    return res.send("Something went wrong, please try again");
  }
}

/* ------------------------- Post Review about User ------------------------- */

export async function PostUserReview(req: Request, res: Response) {
  const user = req.user;

  const { message } = <IPostReviewsTypes>req.body;

  if (user) {
    const receiver_id = req.params.id;

    try {
      const sender = await User.findByEmail(user.email);

      console.log(sender);

      const review = await Review.create({
        message: message,
        sender_id: sender._id,
        sender_name: sender.first_name,
        sender_avatar: sender.avatar,
      });

      const receiver = await User.findById(receiver_id);

      // check if receiver exist && prevent a user from posting a review about himself

      if (receiver && receiver._id == sender._id) {
        receiver.reviews.push(review);

        await receiver.save();
        res.send(review);
      } else {
        return res.send({
          message:
            "Reciever does not exist || receiver is trying to post about his profile",
        });
      }
    } catch (err) {
      return res.send({
        message: "somethin went wrong when trying to post a review",
        err: err,
      });
    }
  }
}
