"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = void 0;
const mongoose_1 = require("mongoose");
const cow_constant_1 = require("./cow.constant");
const CowSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
        enum: cow_constant_1.Location,
    },
    breed: {
        type: String,
        required: true,
        enum: cow_constant_1.Breed,
    },
    weight: {
        type: Number,
        required: true,
    },
    label: {
        type: String,
        required: true,
        enum: cow_constant_1.Label,
    },
    category: {
        type: String,
        required: true,
        enum: cow_constant_1.Category,
    },
    seller: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Cow = (0, mongoose_1.model)("Cow", CowSchema);
