import { UserResponcesI } from "../users/user.types";
import { z } from "zod";
export interface boardResponcesI extends UserResponcesI {}

export const boardSchema = z.object({
  boardName: z.string().optional(),
  totalCustomers: z.string().optional(),
  email: z.string(),
  services: z.array(
    z.object({
      meterCategory: z.string(),
      meterType: z.string(),
      basePrice: z.number(),
      discount: z.number(),
    })
  ),
});

export interface boardSchemaI extends z.infer<typeof boardSchema> {}
