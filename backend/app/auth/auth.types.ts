import { UserResponcesI, userSchemaI } from "../users/user.types";

export interface authResponcesI extends UserResponcesI {}
export interface CredentialsI
  extends Pick<userSchemaI, "username" | "password"> {}
