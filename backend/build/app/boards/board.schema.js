"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base.schema");
const boardSchema = new base_schema_1.BaseSchema({
    boardName: {
        type: String,
    },
    totalCustomers: {
        type: Number,
    },
    email: {
        type: String,
    },
    services: [
        {
            meterCategory: {
                type: String,
            },
            meterType: {
                type: String,
            },
            basePrice: {
                type: Number,
            },
            discount: {
                type: Number,
            },
        },
    ],
});
const boardModel = (0, mongoose_1.model)("Boards", boardSchema);
exports.default = boardModel;
