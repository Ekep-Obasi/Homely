'use client'

import React from 'react'
import * as z from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { CardDescription, CardHeader, CardTitle, CardContent, Card } from '../ui/card'
import { useRouter } from 'next/navigation'
import { LoginSchema, loginFormFeilds } from '@/app/validator/auth'
import { MdOutlineFacebook } from 'react-icons/md'
import { loginUser } from '@/app/api/auth'
import { useApp } from '@/app/context/app-context'
import { useToast } from '@/app/hooks/use-toast'
import { ToastAction } from '../ui/toast'
import { FcGoogle } from 'react-icons/fc'
import { storage } from '@/app/services/storage'
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '@/app/constants'

const LoginForm = () => {
  const { loading, setLoading, setUser } = useApp()
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      setLoading(true)
      const res = await loginUser(values)
      if (res.data.token) {
        setUser(res.data)
        storage.set(USER_STORAGE_KEY, res.data)
        storage.set(TOKEN_STORAGE_KEY, res.data.token)
        router.push('/dashboard')
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
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-1/4 md:border md:shadow-md border-0 shadow-none rounded space-y-1 min-w-[350px] mx-auto gap-4">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome Back! 👋</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {loginFormFeilds.map((props) => (
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
            <FormDescription className="w-full text-right text-blue-400 text-sm">
              <a href="/forgot-password" className="hover:underline">
                Forgot Password?
              </a>
            </FormDescription>
            <Button className="my-3 w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <div
              className="mx-auto my-3 flex w-full items-center justify-evenly
            before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
            after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400"
            >
              or
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="w-full flex space-x-1 items-center">
                <FcGoogle size={18} />
                <span>Google</span>
              </Button>

              <Button variant="outline" className="w-full flex space-x-1 items-center">
                <MdOutlineFacebook size={18} />
                <span>facebook</span>
              </Button>
            </div>
            <div className="w-full text-left text-sm">
              Do you have an account? &nbsp;
              <a href="/signup" className=" text-blue-400 hover:underline">
                sign up
              </a>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default LoginForm
