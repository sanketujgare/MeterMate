import { userResponces } from "../users/user.responces";
import userService from "../users/user.service";
import { authResponces } from "./auth.responses";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CredentialsI } from "./auth.types";
export const login = async (credentials: CredentialsI) => {
  try {
    const user = await userService.findUser({ username: credentials.username });

    if (!user) {
      throw userResponces.INVALID_CREDENTIALS;
    }
    const didMatch = await bcrypt.compare(credentials.password, user.password);
    if (!didMatch) {
      throw userResponces.INVALID_CREDENTIALS;
    }
    const { password, ...restOfTheUser } = user.toObject();
    const { JWT_SECRET } = process.env;
    const token = jwt.sign(restOfTheUser, JWT_SECRET || "");
    return { token };
  } catch (e) {
    throw authResponces.INVALID_CREDENTIALS;
  }
};

export const logout = (token: string) => {
  try {
    const { MANIPULATE_TOKEN } = process.env;
    token = token + MANIPULATE_TOKEN;
    return token;
  } catch (e) {
    throw e;
  }
};
export default {
  login,
  logout,
};
