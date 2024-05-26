import { startServer } from "./app/app";
import { validateEnv } from "./app/utility/env-validator";

validateEnv();
startServer();
