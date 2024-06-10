import { Types } from "mongoose";
import userModel from "./user.schema";
import { id, userSchemaI } from "./user.types";

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

export const assignRole = async (
  userId: Types.ObjectId,
  role: string,
  boardId: Types.ObjectId
) => {
  const isAssigned = await userModel.updateOne(
    { $and: [{ userId: userId }, { boardId: boardId }] },
    { $push: { role: role } }
  );
  return isAssigned;
};

export const getAllCustomers = async (boardId: Types.ObjectId) => {
  const customers = await userModel.find(
    { $and: [{ role: "customer" }, { boardId: boardId }] },
    { password: 0 }
  );
  return customers;
};

export const deleteCustomer = async (
  userId: string,
  boardId: Types.ObjectId
) => {
  const isDeleted = await userModel.updateMany(
    { $and: [{ _id: userId }, { boardId: boardId }] },
    { $set: { isDeleted: true } }
  );
  return isDeleted;
};

export const getDeltedCustomers = async (boardId: Types.ObjectId) => {
  const deletedCustomers = await userModel.find(
    { $and: [{ boardId: boardId }, { isDeleted: true }] },
    { password: 0 }
  );
  return deletedCustomers;
};

export const assignMeter = async (userId: Types.ObjectId, newMeter: any) => {
  const isAssigned = await userModel.findByIdAndUpdate(
    { _id: userId },
    {
      $push: { metersAssigned: { meterId: newMeter._id } },
      $set: { boardId: newMeter.boardId },
    }
  );
  return isAssigned;
};

export default {
  findUser,
  insertOne,
  getAllCustomers,
  deleteCustomer,
  getDeltedCustomers,
  assignMeter,
  assignRole,
};
