import express from "express";
import validateRequest from "../../middlewere/validateRequest";
import { BuyerZodValidationSchema } from "./buyer.validation";
import { BuyerControllar } from "./buyer.controller";

const router = express.Router();

router.post(
  "/signup-buyer",
  validateRequest(BuyerZodValidationSchema.buyerSchema),
  BuyerControllar.createBuyer
);

router.get("/:id", BuyerControllar.getSingleBuyer);

router.patch("/:id", BuyerControllar.updateBuyer);

router.delete("/:id", BuyerControllar.deleteBuyer);

export const BuyerRoutes = { router };
