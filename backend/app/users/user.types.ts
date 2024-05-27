import { Schema } from "zod";
import { z } from "zod";
export interface UserRespincesI {
  [key: string]: {
    statusCode: number;
    message: string;
  };
}

const userSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  fullname: z.string().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  role: z.array(z.string()).default(["User"]),
  profilePic: z.string().optional(),
  empId: z.number(),
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

export interface userSchemaI extends z.infer<typeof userSchema> {}
