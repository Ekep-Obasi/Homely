import * as z from 'zod'
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '../constants'

export const EditProfileSchema = z.object({
  user_name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  phone: z.string().optional(),
  role: z.enum(['client', 'landlord', 'other']).optional(),
  address: z.string().optional(),
  avatar: z
    .any({ required_error: 'image required!' })
    .optional()
    .refine((file: File) => file && file?.size >= MAX_FILE_SIZE, `Max image size is 5KB.`)
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg and .png formats are supported.',
    ),
})

type profileFieldType = {
  [k: string]: string
  name: 'user_name' | 'email' | 'password' | 'phone' | 'address' | 'role'
}[]

export const profileFormFeilds: profileFieldType = [
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
    className: 'bg-muted hover:cursor-default',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'Enter your phone',
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    placeholder: 'Enter your phone',
  },
  {
    name: 'role',
    label: 'Status',
    type: 'text',
    placeholder: 'Update your status',
  },
]
