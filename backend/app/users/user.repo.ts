import { userResponces } from "./user.responces";
import userModel from "./user.schema";
import { userSchemaI } from "./user.types";

export const findUser = async (query: Partial<userSchemaI>) => {
  const user = await userModel.findOne({
    $or: [{ username: query.username }, { email: query.email }],
  });
  return user;
};

export const insertOne = (newUser: userSchemaI) => {
  const User = new userModel(newUser);
  User.save();
  return User;
};

export const getAllCustomers = async () => {
  const customers = await userModel.find({ role: "Customer" });
  return customers;
};
export const deleteUser = async (userIdsToUpdate: any) => {
  const isDeleted = await userModel.updateMany(
    { _id: { $in: userIdsToUpdate } },
    { $set: { isDeleted: true } }
  );
  return isDeleted;
};
export const getDeltedCustomers = async (boardId: string) => {
  const deletedCustomers = await userModel.find({
    $and: [{ metersAssigned: boardId }, { isDeleted: true }],
  });
  return deletedCustomers;
};

export const assignMeter = async (userId: any, newMeterId: any) => {
  const isAssigned = await userModel.findByIdAndUpdate(
    { _id: userId },
    { $push: { metersAssigned: { meterId: newMeterId } } }
  );
  return isAssigned;
};
export default {
  findUser,
  insertOne,
  getAllCustomers,
  deleteUser,
  getDeltedCustomers,
  assignMeter,
};
