import { authResponcesI } from "./auth.types";

export const authResponces: authResponcesI = {
  INVALID_CREDENTIALS: {
    statusCode: 400,
    message: "INVALID CREDENTIALS",
  },
  EMAIL_ALREADY_EXIST: {
    statusCode: 400,
    message: "EMAIL ALREADY EXISTS",
  },
  USERNAME_ALREADY_EXIST: {
    statusCode: 400,
    message: "USERNAME ALREADY EXISTS",
  },
  USER_REGISTRATION_FAILED: {
    statusCode: 500,
    message: "USER REGISTRTION FAILED",
  },
  SOMETHING_WENT_WRONG: {
    statusCode: 500,
    message: "something went wrong",
  },
  USER_IS_NOT_AUTHORISED: {
    statusCode: 401,
    message: "USER IS NOT AUTHORISED",
  },
};
