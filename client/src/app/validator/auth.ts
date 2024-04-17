import * as z from 'zod'

/* ----------------------------- Sign Up Schema ----------------------------- */

export const registrationSchema = z
  .object({
    user_name: z
      .string()
      .min(3, 'Username must be 3 atleast characters')
      .max(50, 'Username must not exceed 50 characters'),
    email: z.string().email(),
    password: z.string().min(1, 'Password Required').min(8, 'Password must be atleast 5 characters'),
    agree: z.boolean().default(false).optional(),
  })
  .refine(({ agree }) => agree === true, {
    path: ['agree'],
    message: 'Agree to terms & conditions',
  })

type signUpFeildTypes = {
  [k: string]: string
  name: 'user_name' | 'email' | 'password'
}[]

export const signUpFormFeilds: signUpFeildTypes = [
  {
    name: 'user_name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
]

/* ------------------------------ Login Schema ------------------------------ */

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password Required').min(8),
})

type loginFeildTypes = {
  [k: string]: string
  name: 'email' | 'password'
}[]

export const loginFormFeilds: loginFeildTypes = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
]

/* ------------------------ Password Recovery Schema ------------------------ */

export const PasswordRecoverySchema = z.object({
  email: z.string().email(),
})

/* -------------------------- Password Reset Schema ------------------------- */

export const PasswordResetSchema = z
  .object({
    password: z.string().min(1, 'Password Required').min(8, 'Password Should be atleast 8 characters'),
    passwordConfirmation: z.string({ required_error: 'Confirm Password' }),
  })
  .refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'Passwords do not match',
  })
