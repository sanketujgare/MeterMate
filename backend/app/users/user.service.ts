import { authResponces } from "../auth/auth.responses";
import { encrypt } from "../utility/encrypt";
import userRepo from "./user.repo";
import { userResponces } from "./user.responces";
import { userSchemaI } from "./user.types";

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
export const getAllCustomers = async () => {
  try {
    const customers = await userRepo.getAllCustomers();
    if (!customers) return userResponces.NO_CUSTOMERS_FOUND;

    return customers;
  } catch (e) {
    throw userResponces.NO_CUSTOMERS_FOUND;
  }
};
export const deleteUser = async (userIdsToUpdate: any) => {
  try {
    const isDeleted = await userRepo.deleteUser(userIdsToUpdate);
    if (!isDeleted) return userResponces.NO_CUSTOMERS_FOUND;

    return userResponces.USER_DELETED_SUCCESSFULY;
  } catch (e) {
    throw e;
  }
};

export const getDeltedCustomers = async (boardId: string) => {
  try {
    const deletedCustomers = await userRepo.getDeltedCustomers(boardId);
    if (!deletedCustomers) return userResponces.NO_CUSTOMERS_FOUND;
    return deletedCustomers;
  } catch (e) {
    throw userResponces.NO_CUSTOMERS_FOUND;
  }
};

export const assignMeter = async (userId: any, meterId: any) => {
  try {
    const isAssigned = await userRepo.assignMeter(userId, meterId);
    if (!isAssigned) return userResponces.FAILED_TO_ASSIGN_METER;

    return userResponces.METER_ASSIGNED;
  } catch (e) {}
};
export default {
  findUser,
  createUser,
  getAllCustomers,
  deleteUser,
  getDeltedCustomers,
};

// userResponces.USER_CREATED_SUCCESSFULLY;
