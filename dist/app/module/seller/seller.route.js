"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewere/validateRequest"));
const seller_validation_1 = require("./seller.validation");
const seller_controller_1 = require("./seller.controller");
const router = express_1.default.Router();
router.post("/signup-seller", (0, validateRequest_1.default)(seller_validation_1.SellerValidationZodSchema.sellerSchema), seller_controller_1.SellerController.createSeller);
router.get("/:id", seller_controller_1.SellerController.getSingleSeller);
router.patch("/:id", seller_controller_1.SellerController.updateSeller);
router.delete("/:id", seller_controller_1.SellerController.deleteSeller);
exports.SellerRoute = { router };
