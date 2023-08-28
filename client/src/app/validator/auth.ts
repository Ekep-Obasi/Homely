import * as z from "zod";

export const registrationSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be 3 atleast characters")
      .max(50, "Username must not exceed 50 characters"),
    email: z.string().email(),
    password: z
      .string()
      .min(1, "Password Required")
      .min(5, "Password must be atleast 5 characters"),
    passwordConfirmation: z.string().min(1, "Password Required"),
    agree: z.boolean().default(false).optional(),
  })
  .refine(
    ({ password, passwordConfirmation }) => password === passwordConfirmation,
    {
      path: ["passwordConfirmation"],
      message: "Passwords do not match",
    }
  )
  .refine(({ agree }) => agree === true, {
    path: ["agree"],
    message: "Agree to terms & conditions",
  });

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password Required").min(8),
});
