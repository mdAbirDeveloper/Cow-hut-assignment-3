import express from "express";
import validateRequest from "../../middlewere/validateRequest";
import { BuyerZodValidationSchema } from "./buyer.validation";
import { BuyerControllar } from "./buyer.controller";

const router = express.Router();

router.post(
  "/signup",
  validateRequest(BuyerZodValidationSchema.buyerSchema),
  BuyerControllar.createBuyer
);

export const BuyerRoutes = { router };
