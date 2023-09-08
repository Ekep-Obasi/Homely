import * as z from "zod";

export const createPropeterySchema = z.object({
  name: z
    .string()
    .min(6, "Your property name must be atleast 4 character")
    .max(12, "Your Property name should not exist 16 characters"),
  address: z.string(),
  description: z.string(),
  email: z.string().email(),
  image: z.string(),
  adress: z.string(),
  bedCount: z.number(),
  accomodationCount: z.number(),
  roomCount: z.number(),
  bathCount: z.number(),
  price: z.string(),
  houseType: z.string(),
  houseQuality: z.string(),
  country: z.string(),
  city: z.string(),
  region: z.string(),
  street: z.string(),
  latitude: z.string(),
  longitude: z.string(),
});
