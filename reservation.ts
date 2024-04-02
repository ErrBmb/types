import { z } from "zod"

export const ReservationZodSchema = z.object({
  author: z.string(),
  location: z.string(),
  start: z.date(),
  end: z.date(),
})
export type ReservationType = z.infer<typeof ReservationZodSchema>
