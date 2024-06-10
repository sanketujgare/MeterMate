import boardRepo from "./board.repo";
import { boardResponces } from "./board.responces";
import { boardSchemaI } from "./board.types";

export const createBoard = async (newBoard: boardSchemaI) => {
  try {
    const isCreated = await boardRepo.createBoard(newBoard);
    if (!isCreated) return boardResponces.COULD_NOT_CREATE_BOARD;
    return boardResponces.BOARD_CREATED_SUCCESSFULLY;
  } catch (e) {
    throw boardResponces.COULD_NOT_CREATE_BOARD;
  }
};

export default {
  createBoard,
};
