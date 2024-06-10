"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const meterSchema = new mongoose_1.Schema({
    boardId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Board",
    },
    serviceId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Board",
    },
    consumerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    bills: [
        {
            billId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Bill",
            },
        },
    ],
    isReadingTaken: {
        type: Boolean,
        default: false,
    },
    isActive: Boolean,
    isAssigned: Boolean,
    balanceAmount: Number,
    avgConsumption: Number,
});
const billsSchema = new mongoose_1.Schema({
    meterId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Meter",
    },
    date: {
        type: Date,
        required: true,
    },
    unitsConsumed: {
        type: Number,
        required: true,
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    images: [String],
});
const billsModel = (0, mongoose_1.model)("Bill", billsSchema);
const meterModel = (0, mongoose_1.model)("Meter", meterSchema);
exports.default = {
    billsModel,
    meterModel,
};
