import { Schema } from "zod";
import { z } from "zod";
export interface UserRespincesI {
  [key: string]: {
    statusCode: number;
    message: string;
  };
}

const userSchema = z.object({});
