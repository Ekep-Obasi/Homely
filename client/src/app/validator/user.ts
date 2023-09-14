import * as z from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";

export const EditProfileSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  date_of_birth: z.date().optional(),
  phone: z.string().optional(),
  status: z.enum(["client", "other"]).optional(),
  address: z.string().optional(),
  avatar: z
    .any({ required_error: "image required!" })
    .refine(
      (file: File) => file && file?.size >= MAX_FILE_SIZE,
      `Max image size is 5KB.`
    )
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg and .png formats are supported."
    ).optional(),
});
