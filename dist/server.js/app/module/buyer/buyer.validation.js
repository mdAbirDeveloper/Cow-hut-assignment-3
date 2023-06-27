"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerZodValidationSchema = void 0;
const zod_1 = require("zod");
const buyerSchema = zod_1.z.object({
    password: zod_1.z.string(),
    role: zod_1.z.enum(["buyer"]),
    name: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
    }),
    phoneNumber: zod_1.z.string(),
    address: zod_1.z.string(),
    budget: zod_1.z.number(),
    income: zod_1.z.number(),
});
exports.BuyerZodValidationSchema = {
    buyerSchema,
};
