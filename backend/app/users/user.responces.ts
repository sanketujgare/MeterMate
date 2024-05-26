import { UserRespincesI } from "./user.types";

export const User_Responces: UserRespincesI = {
  USER_NOT_FOUND: {
    statusCode: 404,
    message: "User not found",
  },
  VALIDATION_ERROR: {
    statusCode: 400,
    message: "Validation error",
  },

  INSERT_SUCCESSFUL: {
    statusCode: 201,
    message: "User Added",
  },
  INSER_FAILED: {
    statusCode: 500,
    message: "Insertion failed",
  },
};
