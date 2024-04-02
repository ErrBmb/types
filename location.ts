import { z } from "zod"

export const PerksZodSchema = z.enum([
  "Wifi",
  "Petit-déjeuner",
  "Cuisine",
  "Salle de bain privée",
  "Télévision",
  "Climatisation",
  "Chauffage",
  "Lave-linge",
  "Sèche-linge",
  "Parking gratuit",
  "Animaux acceptés",
  "Piscine",
  "Jacuzzi",
  "Terrasse ou balcon",
  "Jardin ou espace extérieur",
  "Accès à la plage",
  "Gym",
  "Spa",
  "Sauna",
  "Cheminée",
  "Bureau",
  "Fer à repasser",
  "Sèche-cheveux",
  "Produits de base",
  "Entrée privée",
  "Interphone",
  "Ascenseur",
  "Adapté aux événements",
  "Accessibilité aux personnes à mobilité réduite",
])
export type PerksType = z.infer<typeof PerksZodSchema>

export const BedroomZodSchema = z.object({
  total_capacity: z.number().min(1, {
    message: "Un chambre doit proposer au moins 1 place.",
  }),
  beds: z.array(
    z.number().min(1, {
      message: "Un lit doit proposer au moins 1 place.",
    }),
  ),
})
export type BeedroomType = z.infer<typeof BedroomZodSchema>

export const LocationZodSchema = z.object({
  about: z.string(),
  bedrooms: z.array(BedroomZodSchema).min(1, {
    message: "Une location doit proposer au moins 1 chambre.",
  }),
  perks: z.array(PerksZodSchema),
  owner: z.string(),
  city: z.string(),
  country: z.string(),
  reviews: z.array(z.string()),
})
export type LocationType = z.infer<typeof LocationZodSchema>
