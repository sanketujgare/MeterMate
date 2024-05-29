import { body } from "../utility/validator";
import { boardSchema } from "./board.types";

export const createBoardValidations = [body(boardSchema)];
