"use client";

import React from "react";
import * as z from "zod";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
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
import { registrationSchema } from "@/app/validator/auth";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { signUpUser } from "@/app/api/auth";
import { useRouter } from "next/navigation";
import { useApp } from "@/app/context/app-context";
import { useToast } from "@/app/hooks/use-toast";
import { ToastAction } from "../ui/toast";

const SignUpForm = () => {
  const { loading, setLoading, setUser } = useApp();
  type InputProps = z.infer<typeof registrationSchema>;
  const router = useRouter();
  const {toast} = useToast();

  const form = useForm<InputProps>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      agree: false,
    },
  });

  async function onSubmit({
    agree,
    passwordConfirmation,
    ...data
  }: InputProps) {
    try {
      setLoading(true);
      const res = await signUpUser(data);
      if (res.data._id) {
        setUser(res.data);
        router.push("/login");
        setLoading(false);
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: res.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      return;
    }
  }

  return (
    <Card className="w-1/3 border rounded p-4 space-y-1 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 min-w-[320px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Ready to start this journey with us?</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your fullname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your fullname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password:</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => {
                return (
                  <FormItem className="flex items-start space-x-3 space-y-0 py-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Accept all terms & conditions</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button className="my-3 w-full" disabled={loading}>
              {loading ? "You will be signed in soon..." : "Sign Up"}
            </Button>
            <p className="text-sm">
              Already Have An account?
              <Link
                href="/login"
                className="text-blue-400 ml-1 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
