import { Types } from "mongoose";
import userModel from "./user.schema";
import { id, userSchemaI } from "./user.types";
import { meterSchemaI } from "../meter/meter.type";

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

export const getAllCustomers = async (boardId: Types.ObjectId) => {
  const customers = await userModel.find(
    {
      $and: [{ role: "customer" }, { boardId: boardId }],
    },
    { password: 0 }
  );
  return customers;
};

export const deleteUser = async (userId: string, boardId: Types.ObjectId) => {
  const isDeleted = await userModel.updateMany(
    { $and: [{ _id: userId }, { boardId: boardId }] },
    { $set: { isDeleted: true } },
    { password: 0 }
  );
  return isDeleted;
};

export const getDeltedCustomers = async (boardId: Types.ObjectId) => {
  const deletedCustomers = await userModel.find({
    $and: [{ boardId: boardId }, { isDeleted: true }],
  });
  return deletedCustomers;
};

export const assignMeter = async (userId: Types.ObjectId, newMeter: any) => {
  const isAssigned = await userModel.findByIdAndUpdate(
    { _id: userId },
    { $push: { metersAssigned: { meterId: newMeter._id } } },
    { boardId: newMeter.boardId }
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
