import { config } from "dotenv";
import { z } from "zod";
import { userSchemaI } from "../users/user.types";
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

declare global {
  namespace nodeJS {
    interface ProcessEnv extends Env {}
  }
  namespace Express {
    interface Request {
      currentUser?: any;
    }
  }
}

export default {
  validateEnv,
};
