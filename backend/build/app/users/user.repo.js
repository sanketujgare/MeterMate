"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignMeter = exports.getDeltedCustomers = exports.deleteCustomer = exports.getAllCustomers = exports.assignRole = exports.insertOne = exports.findUser = void 0;
const user_schema_1 = __importDefault(require("./user.schema"));
const findUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_schema_1.default.findOne({
        $or: [{ username: query.username }, { email: query.email }],
    });
    return user;
});
exports.findUser = findUser;
const insertOne = (newUser) => {
    const User = new user_schema_1.default(newUser);
    User.save();
    return User;
};
exports.insertOne = insertOne;
const assignRole = (userId, role, boardId) => __awaiter(void 0, void 0, void 0, function* () {
    const isAssigned = yield user_schema_1.default.updateOne({ $and: [{ userId: userId }, { boardId: boardId }] }, { $push: { role: role } });
    return isAssigned;
});
exports.assignRole = assignRole;
const getAllCustomers = (boardId) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield user_schema_1.default.find({ $and: [{ role: "customer" }, { boardId: boardId }] }, { password: 0 });
    return customers;
});
exports.getAllCustomers = getAllCustomers;
const deleteCustomer = (userId, boardId) => __awaiter(void 0, void 0, void 0, function* () {
    const isDeleted = yield user_schema_1.default.updateMany({ $and: [{ _id: userId }, { boardId: boardId }] }, { $set: { isDeleted: true } });
    return isDeleted;
});
exports.deleteCustomer = deleteCustomer;
const getDeltedCustomers = (boardId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCustomers = yield user_schema_1.default.find({ $and: [{ boardId: boardId }, { isDeleted: true }] }, { password: 0 });
    return deletedCustomers;
});
exports.getDeltedCustomers = getDeltedCustomers;
const assignMeter = (userId, newMeter) => __awaiter(void 0, void 0, void 0, function* () {
    const isAssigned = yield user_schema_1.default.findByIdAndUpdate({ _id: userId }, {
        $push: { metersAssigned: { meterId: newMeter._id } },
        $set: { boardId: newMeter.boardId },
    });
    return isAssigned;
});
exports.assignMeter = assignMeter;
exports.default = {
    findUser: exports.findUser,
    insertOne: exports.insertOne,
    getAllCustomers: exports.getAllCustomers,
    deleteCustomer: exports.deleteCustomer,
    getDeltedCustomers: exports.getDeltedCustomers,
    assignMeter: exports.assignMeter,
    assignRole: exports.assignRole,
};
