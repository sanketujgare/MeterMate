import { config } from "dotenv";
import { z } from "zod";
export const envValidator = z.object({
  PORT: z.coerce.number(),
  MONGO_URI: z.string(),
});

interface Env extends z.infer<typeof envValidator> {}

export const validateEnv = () => {
  try {
    config();
    envValidator.parse(process.env);
  } catch (e) {
    throw {
      message: "ENV NOT CONFIGURED CORRECTLY",
      error: e,
    };
  }
};

declare global {
  namespace nodeJS {
    interface ProcessEnv extends Env {}
  }
}

export default {
  validateEnv,
};
