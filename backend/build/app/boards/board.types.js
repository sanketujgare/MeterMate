"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardSchema = void 0;
const zod_1 = require("zod");
exports.boardSchema = zod_1.z.object({
    boardName: zod_1.z.string().optional(),
    totalCustomers: zod_1.z.string().optional(),
    email: zod_1.z.string(),
    services: zod_1.z.array(zod_1.z.object({
        meterCategory: zod_1.z.string(),
        meterType: zod_1.z.string(),
        basePrice: zod_1.z.number(),
        discount: zod_1.z.number(),
    })),
});
