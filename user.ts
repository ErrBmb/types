import { ObjectId } from "mongoose"
import { z } from "zod"

export type TokenClaims = {
  sub: string
}

export const LoginRequestZodSchema = z.object({
  mail: z.string().email(),
  password: z.string().min(5),
})
export type LoginRequestType = z.infer<typeof LoginRequestZodSchema>

export type LoginResponseType = {
  token: string
}

export const UserZodSchema = z.object({
  mail: z.string().email({ message: "Adresse e-mail invalide" }),
  password: z.string().min(6, {
    message: "Votre mot de passe doit avoir une longueur de 6 caractères",
  }),
  first_name: z
    .string()
    .min(5, { message: "Votre prénom doit faire au moins 2 caractères" }),
  last_name: z
    .string()
    .min(2, { message: "Votre nom doit faire au moins 2 caractères" }),
  phone_number: z.string(),
})

export type UserType = z.infer<typeof UserZodSchema>
