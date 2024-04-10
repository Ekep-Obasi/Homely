'use client'

import React from 'react'
import * as z from 'zod'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { CardDescription, CardHeader, CardTitle, CardContent, Card } from '../ui/card'
import { registrationSchema, signUpFormFeilds } from '@/app/validator/auth'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'
import { signUpUser } from '@/app/api/auth'
import { useRouter } from 'next/navigation'
import { useApp } from '@/app/context/app-context'
import { useToast } from '@/app/hooks/use-toast'
import { ToastAction } from '../ui/toast'

const SignUpForm = () => {
  const { loading, setLoading, setUser } = useApp()
  type InputProps = z.infer<typeof registrationSchema>
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<InputProps>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      user_name: '',
      email: '',
      password: '',
      pswd_confirm: '',
      agree: false,
    },
  })

  async function onSubmit({ agree, pswd_confirm, ...data }: InputProps) {
    try {
      setLoading(true)
      const res = await signUpUser(data)
      if (res.data._id) {
        setUser(res.data)
        router.push('/login')
        setLoading(false)
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: res.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        setLoading(false)
      }
    } catch (err) {
      console.error(err)
      setLoading(false)
      return
    }
  }

  return (
    <Card className="w-1/4 md:border md:shadow-md border-0 shadow-none rounded space-y-1 min-w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Ready to start this journey with us?</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
            <Button className="my-3 w-full" disabled={loading}>
              {loading ? 'You will be signed in soon...' : 'Sign Up'}
            </Button>
            <p className="text-sm">
              Already Have An account?
              <a href="/login" className="text-blue-400 ml-1 hover:underline">
                Login
              </a>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default SignUpForm
