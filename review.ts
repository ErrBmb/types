import { z } from "zod"

export const ReviewZodSchema = z.object({
  author: z.string(),
  location: z.string(),
  message: z.string().optional().default(""),
  date: z.date(),
  rate: z
    .number()
    .min(0, {
      message: "La note minimale pour un avis est 0",
    })
    .max(5, {
      message: "La note maximale pour un avis est 5",
    }),
})
export type ReviewType = z.infer<typeof ReviewZodSchema>
