"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { useToast } from "@/app/hooks/use-toast";
import { PasswordResetSchema } from "@/app/validator/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/app/components/ui/form";
import * as z from "zod";
import { useApp } from "@/app/context/app-context";
import { resetPassword } from "@/app/api/auth";
import { ToastAction } from "@/app/components/ui/toast";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function Logout() {
  type InputProps = z.infer<typeof PasswordResetSchema>;
  const { toast } = useToast();
  const { loading, setLoading } = useApp();
  const router = useRouter();
  const params = useParams();

  const form = useForm<InputProps>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  async function onSubmit({
    password,
    ...rest
  }: z.infer<typeof PasswordResetSchema>) {
    alert(JSON.stringify(password, null, 4));
    setLoading(true);
    try {
      const id = typeof params.id === "string" ? params.id : params.id[0];

      const res = await resetPassword({ id, password });
      if (res.status === 200) {
        toast({
          title: "Password Updated Successfully!",
          description: res.data.message,
          action: <ToastAction altText="Okay">Okay</ToastAction>,
        });
        router.push("/login");
      }
      setLoading(false);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Check your connection and try again!",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });

      setLoading(false);
    }
  }

  return (
    <Card className="w-1/3 border rounded p-4 space-y-1 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
      </CardHeader>
      <CardDescription>
        Put a password that you can easily remember, make sure that you don't
        use your former password
      </CardDescription>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Password"
                      {...field}
                      type="password"
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
                      placeholder="Retype Password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading} variant="default" className="w-full">
              {loading ? "Update Password..." : "Update"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
