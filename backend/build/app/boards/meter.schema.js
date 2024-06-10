"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const meterSchema = new mongoose_1.Schema({
    meterType: {
        type: String, // the meter will be of type solar meter / regular meter
        required: true,
    },
    meterCategorie: {
        type: String, // the meter will be either industrial or household
        required: true,
    },
    meterId: {
        type: mongoose_1.Schema.Types.ObjectId, // MongoDB ObjectId for each document
        required: true,
    },
    consumerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "consumerSchema",
        required: true,
    },
    basePrise: {
        type: Number, // price set by the electricity board
        required: true,
    },
    unitsConsumedPerMonth: [
        {
            date: { type: Date }, // billing month
            unitsConsumed: { type: Number },
            isPaid: { type: Boolean },
        },
    ],
    isActive: {
        type: Boolean,
    },
    balanceAmmount: { type: Number },
    avgConsumption: {
        type: Number,
    },
});
