import { z } from "zod";

const sellerSchema = z.object({
  password: z.string(),
  role: z.enum(["seller"]),
  name: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  phoneNumber: z.string(),
  address: z.string(),
  budget: z.number(),
  income: z.number(),
});

export const SellerValidationZodSchema = { sellerSchema };
