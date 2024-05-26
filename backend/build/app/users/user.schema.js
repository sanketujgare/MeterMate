"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base.schema");
const userSchema = new base_schema_1.baseSchema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    fullname: {
        type: String,
    },
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
        required: true,
        default: ["User"],
    },
    profilePic: {
        type: String,
    },
    empId: {
        type: Number,
        required: true,
    },
    metersAssigned: {
        type: [
            {
                meterId: mongoose_1.Schema.Types.ObjectId,
                ref: "Meters",
            },
        ],
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
        zipCode: {
            type: String,
        },
    },
});
const userModel = (0, mongoose_1.model)("Users", userSchema);
