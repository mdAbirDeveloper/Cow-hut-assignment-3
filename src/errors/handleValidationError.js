"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { IGenericErrorResponse } from '../interfaces/common';
// import { IGenericErrorMessage } from '../interfaces/error';
const handleValidationError = (err) => {
    const errors = Object.values(err.errors).map((el) => {
        return {
            path: el === null || el === void 0 ? void 0 : el.path,
            message: el === null || el === void 0 ? void 0 : el.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: "Validation Error",
        errorMessages: errors,
    };
};
exports.default = handleValidationError;
