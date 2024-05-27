import { UserRespincesI } from "./user.types";

export const userResponces: UserRespincesI = {
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
  USER_CREATED_SUCCESSFULLY: {
    statusCode: 200,
    message: "USER CREATED SUCCESSFULLY",
  },
  NO_CUSTOMERS_FOUND: {
    statusCode: 404,
    message: "NO CUSTOMERS FOUND",
  },
  USER_DELETED_SUCCESSFULY: {
    statusCode: 200,
    message: "USER DELETED SUCCESSFULLY",
  },
  METER_ASSIGNED: {
    statusCode: 200,
    message: "METER ASSISGNED SUCCESSFULLY",
  },
  FAILED_TO_ASSIGN_METER: {
    statusCode: 500,
    message: "FAILED TO ASSIGN METER",
  },
};
