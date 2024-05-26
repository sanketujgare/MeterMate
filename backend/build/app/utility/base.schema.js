"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSchema = void 0;
const mongoose_1 = require("mongoose");
class baseSchema extends mongoose_1.Schema {
    constructor(schema) {
        super(Object.assign(Object.assign({}, schema), { isDeleted: {
                type: Boolean,
                require: false,
            }, createdAt: {
                type: Date,
                default: Date.now(),
            }, updatedAt: {
                type: Date,
                default: Date.now,
            }, updatedBy: {
                require: true,
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "user",
            }, createdBy: {
                require: true,
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "user",
            } }));
    }
}
exports.baseSchema = baseSchema;
