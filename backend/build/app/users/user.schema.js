"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base.schema");
const userSchema = new base_schema_1.BaseSchema({
    firstname: String,
    lastname: String,
    fullname: String,
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: [String],
        default: ["User"],
    },
    profilePic: String,
    empId: {
        type: Number,
    },
    metersAssigned: [
        {
            meterId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Meter",
            },
        },
    ],
    address: {
        city: String,
        state: String,
        country: String,
        zipCode: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    boardId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Board",
    },
});
const userModel = (0, mongoose_1.model)("User", userSchema);
exports.default = userModel;
