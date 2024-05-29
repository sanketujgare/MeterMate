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
    const { password, role, ...restOfTheUser } = user.toObject();
    const { JWT_SECRET } = process.env;
    const token = jwt.sign(restOfTheUser, JWT_SECRET || "");
    return { token, newuser: { role } };
  } catch (e) {
    throw authResponces.INVALID_CREDENTIALS;
  }
};

export default {
  login,
};
