import { z } from "zod"
import { LocationZodSchema } from "./location"

export const ResearchZodType = z.object({
  place: z.string().optional(),
  checkIn: z.coerce.date().optional(),
  checkOut: z.coerce.date().optional(),
  bedrooms: z
    .number()
    .min(0, { message: "Le nombre minimum à indiquer est 0." }),
  beds: z
    .number()
    .min(0, { message: "Le nombre minimum à indiquer est 0." })
    .optional(),
  distance: z.number().optional(),
  maxPrice: z.number().optional(),
})
export type ResearchType = z.infer<typeof ResearchZodType>

export const OfferZodType = z.object({
  location: LocationZodSchema,
  checkIn: z.date(),
  checkOut: z.date(),
  totalPrice: z.number(),
})
export type OfferType = z.infer<typeof OfferZodType>
