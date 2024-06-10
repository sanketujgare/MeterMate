import boardModel from "./board.schema";
import { boardSchemaI } from "./board.types";

export const createBoard = async (newBoard: boardSchemaI) => {
  const boardCreated = new boardModel(newBoard);
  boardCreated.save();
  return boardCreated;
};

export default {
  createBoard,
};
