"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewere/validateRequest"));
const buyer_validation_1 = require("./buyer.validation");
const buyer_controller_1 = require("./buyer.controller");
const router = express_1.default.Router();
router.post("/signup-buyer", (0, validateRequest_1.default)(buyer_validation_1.BuyerZodValidationSchema.buyerSchema), buyer_controller_1.BuyerControllar.createBuyer);
router.get("/:id", buyer_controller_1.BuyerControllar.getSingleBuyer);
router.patch("/:id", buyer_controller_1.BuyerControllar.updateBuyer);
router.delete("/:id", buyer_controller_1.BuyerControllar.deleteBuyer);
exports.BuyerRoutes = { router };
