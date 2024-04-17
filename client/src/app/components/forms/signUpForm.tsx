'use client'

import React from 'react'
import * as z from 'zod'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { CardHeader, CardTitle, CardContent, Card } from '../ui/card'
import { registrationSchema, signUpFormFeilds } from '@/app/validator/auth'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'
import { signUpUser } from '@/app/api/auth'
import { useRouter } from 'next/navigation'
import { useToast } from '@/app/hooks/use-toast'
import { ToastAction } from '../ui/toast'
import OAuth from '../oauth'
import { useUserStore, useAppStore } from '@/app/store'

const SignUpForm = () => {
  const { loading, setLoading } = useAppStore()
  const { setUser } = useUserStore()
  type InputProps = z.infer<typeof registrationSchema>
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<InputProps>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      user_name: '',
      email: '',
      password: '',
      agree: false,
    },
  })

  async function onSubmit({ agree, ...data }: InputProps) {
    try {
      setLoading(true)
      const res = await signUpUser({ ...data, auth_method: 'email-and-password' })
      if (res.data) {
        setUser(res.data)
        router.push('/login')
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: res.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-1/4 md:border md:shadow-md border-0 shadow-none rounded space-y-1 min-w-[350px] mx-auto">
      <CardHeader>
        <CardTitle className="mx-auto">Create Homely Account</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form {...form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {signUpFormFeilds.map((props) => (
              <FormField
                control={form.control}
                name={props.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{props.label}:</FormLabel>
                    <FormControl>
                      <Input placeholder={props.placeholder} type={props.type} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => {
                return (
                  <FormItem className="flex items-start space-x-3 space-y-0 py-3">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none flex-col">
                      <FormLabel>Accept all terms & conditions</FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )
              }}
            />
            <Button type="submit" className="my-3 w-full">
              {loading ? 'You will be signed in soon...' : 'Sign Up'}
            </Button>
            <OAuth />
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default SignUpForm
