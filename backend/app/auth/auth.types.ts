import { UserRespincesI, userSchemaI } from "../users/user.types";

export interface authResponcesI extends UserRespincesI {}
export interface CredentialsI
  extends Pick<userSchemaI, "username" | "password"> {}
