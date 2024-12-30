import {z} from 'zod'

export const locationSchema = z.object({
  address: z.string().min(10, { message: "No address provided."}).max(250, { message: "Address too long."}),
  longitude: z.number(),
  latitude: z.number(),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }).max(250, { message: "Description is too long." }),
  images: z.array(z.object({
        key: z.string(),
        url: z.string(),
        name: z.string()})).nonempty({
          message: "Must upload at least one image.",
        })
})