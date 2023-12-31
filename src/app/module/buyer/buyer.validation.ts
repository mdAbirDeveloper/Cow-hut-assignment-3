import { z } from "zod";

const buyerSchema = z.object({
  password: z.string(),
  role: z.enum(["buyer"]),
  name: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  phoneNumber: z.string(),
  address: z.string(),
  budget: z.number(),
  income: z.number(),
});

export const BuyerZodValidationSchema = {
  buyerSchema,
};
