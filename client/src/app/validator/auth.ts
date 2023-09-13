import * as z from "zod";

/* ----------------------------- Sign Up Schema ----------------------------- */

export const registrationSchema = z
  .object({
    first_name: z
      .string()
      .min(3, "Username must be 3 atleast characters")
      .max(50, "Username must not exceed 50 characters"),
    last_name: z
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


  /* ------------------------------ Login Schema ------------------------------ */

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password Required").min(8),
});

  /* ------------------------ Password Recovery Schema ------------------------ */

export const PasswordRecoverySchema = z.object({
  email: z.string().email(),
});

  /* -------------------------- Password Reset Schema ------------------------- */

export const PasswordResetSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password Required")
      .min(8, "Password Should be atleast 8 characters"),
    passwordConfirmation: z.string({ required_error: "Confirm Password" }),
  })
  .refine(
    ({ password, passwordConfirmation }) => password === passwordConfirmation,
    {
      path: ["passwordConfirmation"],
      message: "Passwords do not match",
    }
  );
