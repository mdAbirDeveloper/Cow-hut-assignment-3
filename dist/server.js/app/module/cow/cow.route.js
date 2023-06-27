"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewere/validateRequest"));
const cow_validation_1 = require("./cow.validation");
const cow_controller_1 = require("./cow.controller");
const router = express_1.default.Router();
router.post("/create-cow", (0, validateRequest_1.default)(cow_validation_1.CowValidationSchema.cowSchema), cow_controller_1.CowControllar.createCow);
router.get("/", cow_controller_1.CowControllar.GetAllCow);
router.patch("/:id", cow_controller_1.CowControllar.updateCow);
router.delete("/:id", cow_controller_1.CowControllar.deleteCow);
exports.CowRoutes = { router };
