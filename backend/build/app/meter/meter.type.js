"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceId = exports.meterId = exports.fieldsToBeUpdated = exports.meterSchema = void 0;
const zod_1 = require("zod");
exports.meterSchema = zod_1.z.object({
    boardId: zod_1.z.string().optional(),
    serviceid: zod_1.z.string(),
    constumerId: zod_1.z.string(),
    bills: zod_1.z.array(zod_1.z.object({
        billId: zod_1.z.string(),
    })),
    isReadingTaken: zod_1.z.string(),
    isActive: zod_1.z.boolean(),
    balanceAmount: zod_1.z.number(),
    aveConsumption: zod_1.z.number(),
});
exports.fieldsToBeUpdated = zod_1.z.object({
    boardId: zod_1.z.string().optional(),
    serviceId: zod_1.z.string().optional(),
    constumerId: zod_1.z.string().optional(),
    bills: zod_1.z.array(zod_1.z
        .object({
        billId: zod_1.z.string(),
    })
        .optional()),
    isReadingTaken: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean().optional(),
    balanceAmount: zod_1.z.number().optional(),
    aveConsumption: zod_1.z.number().optional(),
    isAssigned: zod_1.z.boolean().optional(),
});
exports.meterId = zod_1.z.object({
    meterId: zod_1.z.string(),
});
exports.serviceId = zod_1.z.object({
    serviceId: zod_1.z.string(),
});
