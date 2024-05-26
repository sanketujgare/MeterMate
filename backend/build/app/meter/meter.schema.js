"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base.schema");
const meterSchema = new base_schema_1.baseSchema({
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Bills",
        },
    ],
    isReadingTaken: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
    },
    balanceAmount: {
        type: Number,
    },
    avgConsumption: {
        type: Number,
    },
});
const billsSchema = new base_schema_1.baseSchema({
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
    images: [
        {
            type: String,
        },
    ],
});
const billModel = (0, mongoose_1.model)("MonthlyUsage", billsSchema);
const meterModel = (0, mongoose_1.model)("Meters", meterSchema);
