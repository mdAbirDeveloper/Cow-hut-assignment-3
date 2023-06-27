"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./route"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewere/globalErrorHandler"));
var cors = require("cors");
const app = (0, express_1.default)();
exports.app = app;
const port = 5000;
exports.port = port;
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1", route_1.default);
app.get("/", (req, res, next) => {
    res.send("it's from cow hut");
    next();
});
app.use(globalErrorHandler_1.default);
