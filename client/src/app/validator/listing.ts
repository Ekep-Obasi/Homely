import * as z from "zod";

export const createPropeterySchema = z.object({
  name: z
    .string()
    .min(6, "Your property name must be atleast 4 character")
    .max(12, "Your Property name should not exist 16 characters"),
  address: z.string({ required_error: "Address required" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(60, "Description must be atleast 60 words")
    .max(150, "Description should not exceed 150 words"),
  // image: z.string(),
  bed_count: z.string({ required_error: "Number of Bed required" }),
  accomodation_count: z.string({ required_error: "Number of guest required" }),
  room_count: z.string({ required_error: "Number of rooms required" }),
  bath_count: z.string({ required_error: "Number of bathrooms required" }),
  price: z.string({ required_error: "Price is required" }),
  house_type: z.enum(["Room", "Studio", "Apartement"])  ,
  house_quality: z.enum(["Minimal", "Classic", "Modern"]),
  // country: z.string({ required_error: "Country is required" }),
  // city: z.string({ required_error: "City is required" }),
  // region: z.string({ required_error: "Region is required" }),
  // street: z.string({ required_error: "Street is required" }),
  // latitude: z.string(),
  // longitude: z.string(),
});
