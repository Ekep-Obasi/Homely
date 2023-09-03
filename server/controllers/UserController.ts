import { Request, Response, NextFunction } from "express";
import { ICreateUserTypes, IEditUserTypes, ILoginUserTypes } from "../dto";
import { User } from "../models";
import { SignAuthToken, ValidatePassword } from "../utility";

// create User

export async function CreateUser(req: Request, res: Response, next: NextFunction) {

  const { first_name, last_name, email, password, ...rest } = <ICreateUserTypes>req.body;

  // check for existing user
  const existingUser = await User.findByEmail(email);

  if (existingUser !== null) return res.send({ message: "user already exits with this email" });

  try {
    const user = await User.create({ first_name, last_name, email, password, ...rest });

    res.send(user);

  } catch (err) {

    res.send({ message: "An error occured in creating user" });
  }
}

// get all users

export async function GetAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await User.find();

    return res.send(users);
  } catch (err) {

    return res.send({ message: "An error occured in all users" });
  }
}

// get users by ID
export async function GetUserID(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    return res.send(user);
  } catch (err) {
    res.send({ message: "An error occured in id" });
  }
}

// login User

export async function UserLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = <ILoginUserTypes>req.body;

  try {
    // check if user exists in database
    const existingUser = await User.findByEmail(email);

    if (existingUser !== null) {
      // compare saved and entered password
      const isValidPassword = await ValidatePassword(password, existingUser.password, existingUser.salt);

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
    res.send({ message: "An error occured from somewhere" })
  }
}

// get user profile 

export async function GetUserProfile(req: Request, res: Response, next: NextFunction) {
  const user = req.user;

  if (user) {
    const data = await User.findByEmail(user.email);

    return res.send(data);
  }

  return res.send({ message: "Unable to find user data" });
}

export async function EditUserProfile(req: Request, res: Response, next: NextFunction) {
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

      res.send("Internal server error")
    }

  } else {
    return res.send('Something went wrong, please try again')
  }
}