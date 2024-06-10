import { boardId, UserResponcesI } from "../users/user.types";
import { z } from "zod";
export interface meterResponcesI extends UserResponcesI {}

export const meterSchema = z.object({
  boardId: z.string().optional(),
  serviceid: z.string(),
  constumerId: z.string(),
  bills: z.array(
    z.object({
      billId: z.string(),
    })
  ),
  isReadingTaken: z.string(),
  isActive: z.boolean(),
  balanceAmount: z.number(),
  aveConsumption: z.number(),
});

export const fieldsToBeUpdated = z.object({
  boardId: z.string().optional(),
  serviceId: z.string().optional(),
  constumerId: z.string().optional(),
  bills: z.array(
    z
      .object({
        billId: z.string(),
      })
      .optional()
  ),
  isReadingTaken: z.string().optional(),
  isActive: z.boolean().optional(),
  balanceAmount: z.number().optional(),
  aveConsumption: z.number().optional(),
  isAssigned: z.boolean().optional(),
});

export const meterId = z.object({
  meterId: z.string(),
});

export const serviceId = z.object({
  serviceId: z.string(),
});
export interface serviceIdI extends z.infer<typeof serviceId> {}
export interface fieldsToBeUpdated extends z.infer<typeof fieldsToBeUpdated> {}
export interface meterSchemaI extends z.infer<typeof meterSchema> {}
export interface meterIdI extends z.infer<typeof meterId> {}
