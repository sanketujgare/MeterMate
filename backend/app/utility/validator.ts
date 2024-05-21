import { ZodObject, ZodRawShape } from "zod";

export const validator = <T extends ZodRawShape>(
  sourse: any,
  schema: ZodObject<T>
) => {};
