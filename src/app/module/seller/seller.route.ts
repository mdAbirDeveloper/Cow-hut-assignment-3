import express from "express";
import validateRequest from "../../middlewere/validateRequest";
import { SellerValidationZodSchema } from "./seller.validation";
import { SellerController } from "./seller.controller";

const router = express.Router();

router.post(
  "/signup-seller",
  validateRequest(SellerValidationZodSchema.sellerSchema),
  SellerController.createSeller
);

router.get("/:id", SellerController.getSingleSeller);

router.patch("/:id", SellerController.updateSeller);

router.delete("/:id", SellerController.deleteSeller);

export const SellerRoute = { router };
