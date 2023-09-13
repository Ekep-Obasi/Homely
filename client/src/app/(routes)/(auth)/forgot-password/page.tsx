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
import { PasswordRecoverySchema } from "@/app/validator/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/app/components/ui/form";
import * as z from "zod";
import { useApp } from "@/app/context/app-context";
import { forgotPassword } from "@/app/api/auth";
import { ToastAction } from "@/app/components/ui/toast";
import { useRouter } from "next/navigation";

type Props = {};

export default function Logout(props: Props) {
  type InputProps = z.infer<typeof PasswordRecoverySchema>;
  const { toast } = useToast();
  const { loading, setLoading } = useApp();
  const router = useRouter();

  const form = useForm<InputProps>({
    resolver: zodResolver(PasswordRecoverySchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(email: z.infer<typeof PasswordRecoverySchema>) {
    setLoading(true);
    try {
      const res = await forgotPassword(email);
      if (res.status === 200) {
        toast({
          title: "Email Sent",
          description: res.data.message,
          action: <ToastAction altText="Okay">Okay</ToastAction>,
        });
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
        <CardTitle>Forgot Password?</CardTitle>
      </CardHeader>
      <CardDescription>
        A password reset event has been triggered. The password reset window is
        limited to two hours, Check your email book
      </CardDescription>
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
            <Button disabled={loading} variant="default" className="w-full">
              {loading ? "Sending email..." : "Send"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
