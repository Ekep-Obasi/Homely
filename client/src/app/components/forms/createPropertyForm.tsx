'use client'

import { useState } from 'react'
import * as z from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Icons from 'lucide-react'
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from '../ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/app/components/ui/dialog'
import { useForm } from 'react-hook-form'
import { CardContent, Card } from '../ui/card'
import { motion } from 'framer-motion'
import { createPropeterySchema } from '@/app/validator/listing'
import { Progress } from '../ui/progress'
import Map from '../googleMap/map'
import { houseQuality, houseType, LISTING_STORAGE_KEY } from '@/app/constants'
import TextEditor from '../text-editor'
import { jsonToFormData } from '@/app/utils'
import { createListing } from '@/app/api/listing'
import { LOCAL_STORAGE } from '@/app/services/storage'
import { toast } from '@/app/hooks/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
import { useApp } from '@/app/context/app-context'

const CreateProptertyForm = () => {
  type InputProps = z.infer<typeof createPropeterySchema>
  const [formStep, setFormStep] = useState(0)
  const [images, setImages] = useState()
  const formData = new FormData()
  const { isLoading } = useApp()

  const form = useForm<InputProps>({
    resolver: zodResolver(createPropeterySchema),
    defaultValues: {
      name: '',
      description: '',
      address: '',
      bed_count: '1',
      accomodation_count: '2',
      room_count: '2',
      bath_count: '1',
      price: '10000',
      house_type: 'Room',
      house_quality: 'Minimal',
      // country: "",
      // city: "",
      // region: "",
      // street: "",
      // latitude: "",
      // longitude: "",
    },
  })

  async function onSubmit(values: z.infer<typeof createPropeterySchema>) {
    alert(JSON.stringify(values, null, 4))
    jsonToFormData<InputProps>(values, formData)
    try {
      const res = await createListing(formData)
      if (res.status === 200) {
        LOCAL_STORAGE.set(LISTING_STORAGE_KEY, res.data)
        toast({
          title: 'succes',
          description: 'listing created successfully',
        })
      } else {
        toast({
          variant: 'destructive',
          title: res.data.message,
          description: res.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }
    } catch {
      return
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create A Property</DialogTitle>
        <DialogDescription>
          This information will be viewed by all users on this platform
          <Card className="border-none shadow-none flex justify-center items-center">
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="space-y-3 p-1 flex justify-start items-center lg:w-[422px] gap-2 overflow-x-hidden">
                    <motion.div
                      className="flex-col space-y-3 translate-x-0"
                      animate={{
                        translateX: `-${formStep * 102}%`,
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Property Name:</FormLabel>
                            <FormControl>
                              <Input className="lg:w-[415px] sm:w-[320px]" placeholder="Enter Proprerty name" {...field} />
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
                            <FormLabel>Property Address:</FormLabel>
                            <FormControl>
                              <Input className="lg:w-[415px] sm:w-[320px]" placeholder="Enter Proprerty address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="house_quality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>House Quality:</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your preferred house quality" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {houseQuality.map((item, key) => (
                                  <SelectItem value={item} key={key}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="house_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>House Types:</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your preferred house type" />
                                </SelectTrigger>
                              </FormControl>

                              <SelectContent>
                                {houseType.map((item, key) => (
                                  <SelectItem value={item} key={key}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    <motion.div
                      className="flex-col space-y-3 translate-x-0"
                      animate={{
                        translateX: `-${formStep * 102}%`,
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}
                    >
                      <FormField
                        control={form.control}
                        name="accomodation_count"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Guest Count:</FormLabel>
                            <FormControl>
                              <Input
                                className=" lg:w-[415px] sm:w-[320px]"
                                placeholder="Enter Number of People that can be accomodated"
                                type={'number'}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="bed_count"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Beds:</FormLabel>
                            <FormControl>
                              <Input className=" lg:w-[415px] sm:w-[320px]" placeholder="Enter Number of Beds" {...field} type={'number'} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="room_count"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Rooms:</FormLabel>
                            <FormControl>
                              <Input className="lg:w-[415px] sm:w-[320px]" placeholder="Number of Rooms" {...field} type={'number'} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="bath_count"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Bathrooms:</FormLabel>
                            <FormControl>
                              <Input className="lg:w-[415px] sm:w-[320px]" placeholder="Number of Bathrooms" {...field} type={'number'} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    {/* <motion.div
                      className="flex-col space-y-3 translate-x-0"
                      animate={{
                        translateX: `-${formStep * 102}%`,
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Map width="415px" height="350px" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div> */}
                    <motion.div
                      className="flex-col space-y-3 translate-x-0"
                      animate={{
                        translateX: `-${formStep * 102}%`,
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}
                    >
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>description</FormLabel>
                            <FormControl>
                              <TextEditor className="lg:w-[415px] sm:w-[320px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    {/* <motion.div
                      className="flex-col space-y-3 translate-x-0"
                      animate={{
                        translateX: `-${formStep * 102}%`,
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    >
                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem className="ring-0">
                            <FormControl>
                              <div
                                style={{
                                  background: `url('data:image/png;base64,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')`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                                className="w-[415px] h-[350px] border flex justify-center items-center bg-cover bg-center rounded-sm"
                              >
                                <Input
                                  type={"file"}
                                  className="py-2 border-dashed h-[350px] w-[415px] bg-transparent opacity-0"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div> */}
                    <motion.div
                      className="flex-col space-y-3 translate-x-0"
                      animate={{
                        translateX: `-${formStep * 102}%`,
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}
                    >
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem className="ring-0">
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <Input type={'number'} className="lg:w-[415px] sm:w-[320px]" placeholder="Set Listing Price" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  </div>
                  <div className="lg:w-[415px] flex justify-between  my-2">
                    {formStep === 0 ? (
                      <></>
                    ) : (
                      <Button className="flex items-center space-x-1" onClick={() => setFormStep((prev) => prev - 1)} type="button">
                        <Icons.ArrowLeft />
                        <span>Prev</span>
                      </Button>
                    )}
                    {formStep !== 5 ? (
                      <Button className="flex items-center space-x-1" onClick={() => setFormStep((prev) => prev + 1)} type="button">
                        <span>Next</span>
                        <Icons.ArrowRight />
                      </Button>
                    ) : (
                      <Button type="submit">{isLoading ? 'Creating...' : 'Submit'}</Button>
                    )}
                  </div>
                </form>
              </Form>
              <Progress className="h-[7px] w-full my-4 lg:w-[415px]" value={formStep * 20} />
            </CardContent>
          </Card>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  )
}

export default CreateProptertyForm
