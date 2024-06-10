import { Types } from "mongoose";
import { authResponces } from "../auth/auth.responses";
import boardService from "../boards/board.service";
import { meterResponces } from "../meter/meter.responces";
import meterService from "../meter/meter.service";
import { serviceIdI } from "../meter/meter.type";
import { encrypt } from "../utility/encrypt";
import userRepo from "./user.repo";
import { userResponces } from "./user.responces";
import { id, userSchemaI } from "./user.types";
import { boardSchemaI } from "../boards/board.types";

export const findUser = async (query: Partial<userSchemaI>) => {
  try {
    const user = await userRepo.findUser(query);
    if (user) return user;
  } catch (e) {
    throw authResponces.INVALID_CREDENTIALS;
  }
};

export const checkExisting = async (newUser: userSchemaI) => {
  try {
    const { username, email } = newUser;
    const userExist = await findUser({ username, email });
    if (userExist) {
      if (userExist.username === username)
        throw authResponces.USERNAME_ALREADY_EXIST;
      if (userExist.email === email) throw authResponces.EMAIL_ALREADY_EXIST;
    }
    newUser.password = await encrypt(newUser.password);
    return newUser;
  } catch (e) {
    throw e;
  }
};

export const createUser = async (newUser: userSchemaI) => {
  try {
    const newuser = await checkExisting(newUser);
    const result = userRepo.insertOne(newuser);
    if (result) return userResponces.USER_CREATED_SUCCESSFULLY;
  } catch (e) {
    throw e;
  }
};

export const getAllCustomers = async (boardId: any) => {
  try {
    const customers = await userRepo.getAllCustomers(boardId as Types.ObjectId);
    if (!customers) return userResponces.NO_CUSTOMERS_FOUND;
    return customers;
  } catch (e) {
    throw userResponces.NO_CUSTOMERS_FOUND;
  }
};

export const deleteCustomer = async (
  userId: string,
  boardId: Types.ObjectId
) => {
  try {
    const isDeleted = await userRepo.deleteCustomer(userId, boardId);
    if (!isDeleted) return userResponces.NO_CUSTOMERS_FOUND;
    return userResponces.USER_DELETED_SUCCESSFULY;
  } catch (e) {
    throw e;
  }
};

export const getDeltedCustomers = async (boardId: Types.ObjectId) => {
  try {
    const deletedCustomers = await userRepo.getDeltedCustomers(boardId);
    if (!deletedCustomers) return userResponces.NO_CUSTOMERS_FOUND;
    return deletedCustomers;
  } catch (e) {
    throw userResponces.NO_CUSTOMERS_FOUND;
  }
};

export const assignMeter = async (
  userId: Types.ObjectId,
  serviceId: serviceIdI
) => {
  try {
    let meter = await meterService.getMeterByService(serviceId);
    if (!meter) return meterResponces.METER_NOT_AVAILABLE;
    await userRepo.assignMeter(userId, meter);
    const isUpdated = await meterService.updateMeter(meter._id, {
      isAssigned: true,
      isActive: true,
    });
    if (!isUpdated) throw meterResponces.METER_NOT_UPDATED;
    return userResponces.METER_ASSIGNED;
  } catch (e) {
    throw e;
  }
};

export const createBoard = async (newBoard: boardSchemaI) => {
  try {
    const isCreated = await boardService.createBoard(newBoard);
    return isCreated;
  } catch (e) {
    throw e;
  }
};

export default {
  findUser,
  createUser,
  getAllCustomers,
  deleteCustomer,
  getDeltedCustomers,
  assignMeter,
  createBoard,
};
