import { z } from "zod";
import { UserRole } from "./buyer.interface";

const buyerSchema = z.object({
  // _id: z.string(),
  password: z.string(),
  role: z.enum(["buyer", "seller"]),
  name: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  phoneNumber: z.string(),
  address: z.string(),
  budget: z.number(),
  income: z.number(),
  // createdAt: z.date(),
  // updatedAt: z.date(),
});

export const BuyerZodValidationSchema = {
  buyerSchema,
};
