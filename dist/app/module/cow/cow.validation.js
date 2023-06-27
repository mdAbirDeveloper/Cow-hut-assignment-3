"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowValidationSchema = void 0;
const zod_1 = require("zod");
const cow_constant_1 = require("./cow.constant");
// const locationValues = Object.values(Location) as string[];
const cowSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "that is required",
    }),
    age: zod_1.z.number({
        required_error: "that is required",
    }),
    price: zod_1.z.number({
        required_error: "that is required",
    }),
    location: zod_1.z.enum([...cow_constant_1.Location]),
    breed: zod_1.z.enum([...cow_constant_1.Breed]),
    weight: zod_1.z.number({
        required_error: "that is required",
    }),
    label: zod_1.z.enum([...cow_constant_1.Label]),
    category: zod_1.z.enum([...cow_constant_1.Category]),
    seller: zod_1.z.string({
        required_error: "that is required",
    }),
});
exports.CowValidationSchema = {
    cowSchema,
};
