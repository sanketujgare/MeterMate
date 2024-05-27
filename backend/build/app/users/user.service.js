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
exports.getDeltedCustomers = exports.deleteUser = exports.getAllCustomers = exports.createUser = exports.checkExisting = exports.findUser = void 0;
const auth_responses_1 = require("../auth/auth.responses");
const encrypt_1 = require("../utility/encrypt");
const user_repo_1 = __importDefault(require("./user.repo"));
const user_responces_1 = require("./user.responces");
const findUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_repo_1.default.findUser(query);
        if (user)
            return user;
    }
    catch (e) {
        throw auth_responses_1.authResponces.INVALID_CREDENTIALS;
    }
});
exports.findUser = findUser;
const checkExisting = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email } = newUser;
        const userExist = yield (0, exports.findUser)({ username, email });
        if (userExist) {
            if (userExist.username === username)
                throw auth_responses_1.authResponces.USERNAME_ALREADY_EXIST;
            if (userExist.email === email)
                throw auth_responses_1.authResponces.EMAIL_ALREADY_EXIST;
        }
        newUser.password = yield (0, encrypt_1.encrypt)(newUser.password);
        return newUser;
    }
    catch (e) {
        throw e;
    }
});
exports.checkExisting = checkExisting;
const createUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newuser = yield (0, exports.checkExisting)(newUser);
        const result = user_repo_1.default.insertOne(newuser);
        if (result)
            return user_responces_1.userResponces.USER_CREATED_SUCCESSFULLY;
    }
    catch (e) {
        throw e;
    }
});
exports.createUser = createUser;
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield user_repo_1.default.getAllCustomers();
        if (!customers)
            return user_responces_1.userResponces.NO_CUSTOMERS_FOUND;
        return customers;
    }
    catch (e) {
        throw user_responces_1.userResponces.NO_CUSTOMERS_FOUND;
    }
});
exports.getAllCustomers = getAllCustomers;
const deleteUser = (userIdsToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isDeleted = yield user_repo_1.default.deleteUser(userIdsToUpdate);
        if (!isDeleted)
            return user_responces_1.userResponces.NO_CUSTOMERS_FOUND;
        return user_responces_1.userResponces.USER_DELETED_SUCCESSFULY;
    }
    catch (e) {
        throw e;
    }
});
exports.deleteUser = deleteUser;
const getDeltedCustomers = (boardId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCustomers = yield user_repo_1.default.getDeltedCustomers(boardId);
        if (!deletedCustomers)
            return user_responces_1.userResponces.NO_CUSTOMERS_FOUND;
        return deletedCustomers;
    }
    catch (e) {
        throw user_responces_1.userResponces.NO_CUSTOMERS_FOUND;
    }
});
exports.getDeltedCustomers = getDeltedCustomers;
exports.default = {
    findUser: exports.findUser,
    createUser: exports.createUser,
    getAllCustomers: exports.getAllCustomers,
    deleteUser: exports.deleteUser,
    getDeltedCustomers: exports.getDeltedCustomers,
};
// userResponces.USER_CREATED_SUCCESSFULLY;
