import { Schema, string } from "zod";
import { z } from "zod";
export interface UserResponcesI {
  [key: string]: {
    statusCode: number;
    message: string;
  };
}

export const userSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  fullname: z.string().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  role: z.array(z.string()).default(["User"]),
  profilePic: z.string().optional(),
  empId: z.number().optional(),
  metersAssigned: z
    .array(
      z.object({
        meterId: z.string(),
      })
    )
    .optional(),
  address: z
    .object({
      city: z.string().optional(),
      state: z.string().optional(),
      country: z.string().optional(),
      zipCode: z.string().optional(),
    })
    .optional(),
});

export const boardId = z.object({
  boardid: z.string(),
});

export const assignMeterSchema = z.object({
  userId: z.string(),
  serviceId: z.string(),
});

export type id = String;

export interface IassignMeterSchema extends z.infer<typeof assignMeterSchema> {}
export interface boardIdI extends z.infer<typeof boardId> {}
export interface userSchemaI extends z.infer<typeof userSchema> {}
