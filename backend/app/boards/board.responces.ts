import { boardResponcesI } from "./board.types";

export const boardResponces: boardResponcesI = {
  COULD_NOT_CREATE_BOARD: {
    statusCode: 422,
    message: "COULD NOT CREATE BOARD",
  },
  BOARD_CREATED_SUCCESSFULLY: {
    statusCode: 202,
    message: "BOARD CREATED SUCCESSFULLY",
  },
};
