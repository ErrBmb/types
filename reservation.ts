import { z } from "zod"

export const ReservationZodSchema = z.object({
  author: z.string(),
  location: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
})
export type ReservationType = z.infer<typeof ReservationZodSchema>
