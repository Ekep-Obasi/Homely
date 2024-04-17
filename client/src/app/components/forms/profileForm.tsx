'use client'

import React, { useRef, useState } from 'react'
import * as z from 'zod'
import { Input } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form'
import { useForm } from 'react-hook-form'
import { useToast } from '@/app/hooks/use-toast'
import { ToastAction } from '@/app/components/ui/toast'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar'
import { Separator } from '@/app/components/ui/separator'
import { EditProfileSchema, profileFormFeilds } from '@/app/validator/user'
import { generateAcronym, getUserEntries, jsonToFormData } from '@/app/utils'
import { updateUser } from '@/app/api/users'
import { storage } from '@/app/services/storage'
import { USER_STORAGE_KEY } from '@/app/constants'
import { User } from '@/app/types/user'
import { useUserStore, useAppStore } from '@/app/store'

const ProfileForm = () => {
  const { loading, setLoading } = useAppStore()
  const { setUser, user } = useUserStore()
  const { toast } = useToast()
  const formData = new FormData()
  const [file, setFile] = useState('')
  const [image, setImage] = useState(user?.avatar)

  console.log(user)

  const form = useForm<User>({
    resolver: zodResolver(EditProfileSchema),
    ...(user ? { defaultValues: { ...user, password: user.email } } : {}),
  })

  const handleImageChange = (e: any) => {
    setFile(e.target.files[0])
    setImage(URL.createObjectURL(e.target.file[0]))
    formData.append('avatar', file)
  }

  async function onSubmit(values: User) {
    jsonToFormData<User>(values, formData)

    try {
      setLoading(true)
      const res = await updateUser(formData)
      if (res.status === 200) {
        setUser(res.data)
        storage.set(USER_STORAGE_KEY, res.data)
        toast({
          title: 'Success',
          description: 'User updated succesfully!',
        })
      } else {
        toast({
          variant: 'destructive',
          title: res.data.message,
          description: res.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        setLoading(false)
      }
      setLoading(false)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  if (!user) return null

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-2">
        <div>
          <div className="flex items-center space-x-3 py-2">
            <div className="relative">
              <Avatar className="h-[120px] w-[120px]">
                <AvatarImage src={image} />
                <AvatarFallback className="text-2xl">{generateAcronym(user.user_name)}</AvatarFallback>
              </Avatar>
              <FormField
                name="avatar"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="text-transparent z-50 cursor-pointer">
                    <FormControl>
                      <Input
                        name="avatar"
                        type="file"
                        onChange={handleImageChange}
                        className="absolute h-[40px] w-[40px] flex justify-center items-center rounded-full p-0 right-0 top-2/3 bg-primary text-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="h-full space-y-1">
              <h1 className="text-2xl">{user?.user_name}</h1>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <h3>Personal Information</h3>
          <Separator className="my-4 w-full" />
          <div className="grid grid-cols-2 grid-rows-4 gap-4">
            {profileFormFeilds.map((props) => (
              <FormField
                control={form.control}
                name={props.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{props.label}:</FormLabel>
                    <FormControl>
                      <Input placeholder={props.placeholder} {...field} type={props.type} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
        <Button type="submit" className="my-3 self-end" disabled={loading}>
          {loading ? 'Saving...' : 'Edit Profile'}
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm
