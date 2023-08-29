"use client";

import React from "react";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  Card,
} from "../ui/card";
import { LoginSchema } from "@/app/validator/auth";
import Link from "next/link";
import { Facebook } from "lucide-react";

const LoginForm = () => {
  type InputProps = z.infer<typeof LoginSchema>;

  const form = useForm<InputProps>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    alert(JSON.stringify(values, null, 4));
  }

  return (
    <Card className="w-1/3 border rounded p-4 space-y-1 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome Back!</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription className="w-full text-right text-blue-400 text-sm">
                    <Link href="/forgot-password" className="hover:underline">
                      Forgot Password?
                    </Link>
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button className="my-3 w-full">Login</Button>
            <div
              className="mx-auto my-3 flex w-full items-center justify-evenly
            before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
            after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400"
            >
              or
            </div>
            <div className="flex gap-2">
              <Button className="w-full">
                <i className="fa fa-google" aria-hidden="true"></i>
                Sign Up with Google
              </Button>

              <Button className="w-full">
                <Facebook /> Sign Up with Facebook
              </Button>
            </div>
            <div className="w-full text-left text-sm">
              I don&apos;t have an account &nbsp;
              <Link href="/signup" className=" text-blue-400 hover:underline">
                sign up
              </Link>
              &nbsp; instead
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
