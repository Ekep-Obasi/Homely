"use client";

import React, { useRef, useState } from "react";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { useApp } from "@/app/context/app-context";
import { useToast } from "@/app/hooks/use-toast";
import { ToastAction } from "@/app/components/ui/toast";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Separator } from "@/app/components/ui/separator";
import { EditProfileSchema } from "@/app/validator/user";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/app/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/app/components/ui/calendar";
import { generateAcronym, getUserEntries, jsonToFormData } from "@/app/utils";
import { updateUser } from "@/app/api/users";
import { LOCAL_STORAGE } from "@/app/services/storage";
import { USER_STORAGE_KEY } from "@/app/constants";
import { User } from "@/app/types/user";

const LoginForm = () => {
  type InputProps = z.infer<typeof EditProfileSchema>;
  const { loading, setLoading, setUser, user } = useApp();
  const { toast } = useToast();
  const defaultValues = getUserEntries(user);
  const formData = new FormData();
  const [file, setFile] = useState("");
  const [editable, setEditable] = useState(true);
  const [image, setImage] = useState("");

  const form = useForm<InputProps>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues,
  });

  const handleImageChange = (e: any) => {
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.file[0]));
    formData.append("avatar", file);
  };

  async function onSubmit({date_of_birth, ...values}: z.infer<typeof EditProfileSchema>) {
    alert(JSON.stringify(values, null, 4));

    if(date_of_birth) formData.append('date_of_birth', date_of_birth.toLocaleDateString())
    jsonToFormData<InputProps>({ ...values }, formData);

    try {
      setLoading(true);
      const res = await updateUser(formData);
      if (res.status === 200) {
        setUser(res.data);
        LOCAL_STORAGE.set(USER_STORAGE_KEY, res.data);
        toast({
          title: "Success",
          description: "User updated succesfully!",
        });
      } else {
        toast({
          variant: "destructive",
          title: res.data.message,
          description: res.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        setLoading(false);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      return;
    }

    setEditable(false);
  }

  return (
    <div className="w-2/3 p-4 space-y-1 min-h-full min-w-[350px] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-2">
          <div>
            <div className="flex items-center space-x-3 py-2">
              <div className="relative">
                <Avatar className="h-[120px] w-[120px]">
                  <AvatarImage src={image} />
                  <AvatarFallback className="text-2xl">
                    {generateAcronym(user?.first_name)}
                  </AvatarFallback>
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
                <h1 className="text-2xl">{user?.first_name}</h1>
                <p className="text-muted-foreground">{user?.last_name}</p>
              </div>
            </div>
            <h3>Personal Information</h3>
            <Separator className="my-4 w-full" />
            <div className="grid grid-cols-2 grid-rows-4 gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your First Name" {...field} />
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
                      <Input placeholder="Enter your last Name" {...field} />
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
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="bg-muted hover:cursor-default"
                        disabled
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password:</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          defaultValue={user?.email}
                          disabled={editable}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription
                        className="w-full text-right text-blue-400 text-sm cursor-pointer"
                        onClick={() => setEditable((prev) => !prev)}
                      >
                        Edit
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="date_of_birth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Phone Number"
                        {...field}
                        type="tel"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Address"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" className="my-3 self-end" disabled={loading}>
            {loading ? "Saving..." : "Edit Profile"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;

