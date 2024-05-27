"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    firstname: zod_1.z.string().optional(),
    lastname: zod_1.z.string().optional(),
    fullname: zod_1.z.string().optional(),
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    email: zod_1.z.string().email(),
    role: zod_1.z.array(zod_1.z.string()).default(["User"]),
    profilePic: zod_1.z.string().optional(),
    empId: zod_1.z.number(),
    metersAssigned: zod_1.z
        .array(zod_1.z.object({
        meterId: zod_1.z.string(),
    }))
        .optional(),
    address: zod_1.z
        .object({
        city: zod_1.z.string().optional(),
        state: zod_1.z.string().optional(),
        country: zod_1.z.string().optional(),
        zipCode: zod_1.z.string().optional(),
    })
        .optional(),
});
