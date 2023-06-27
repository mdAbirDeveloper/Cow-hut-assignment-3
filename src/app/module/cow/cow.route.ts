import express from "express";
import validateRequest from "../../middlewere/validateRequest";
import { CowValidationSchema } from "./cow.validation";
import { CowControllar } from "./cow.controller";

const router = express.Router();

router.post(
  "/create-cow",
  validateRequest(CowValidationSchema.cowSchema),
  CowControllar.createCow
);

router.get("/", CowControllar.GetAllCow);

router.patch("/:id", CowControllar.updateCow);

router.delete("/:id", CowControllar.deleteCow);

export const CowRoutes = { router };
