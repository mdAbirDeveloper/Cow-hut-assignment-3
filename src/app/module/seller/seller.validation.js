"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerValidationZodSchema = void 0;
const zod_1 = require("zod");
const sellerSchema = zod_1.z.object({
    password: zod_1.z.string(),
    role: zod_1.z.enum(["seller"]),
    name: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
    }),
    phoneNumber: zod_1.z.string(),
    address: zod_1.z.string(),
    budget: zod_1.z.number(),
    income: zod_1.z.number(),
});
exports.SellerValidationZodSchema = { sellerSchema };
