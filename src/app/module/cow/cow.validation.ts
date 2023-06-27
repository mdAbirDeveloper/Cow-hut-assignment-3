import { z } from "zod";
import { Breed, Category, Label, Location } from "./cow.constant";

// const locationValues = Object.values(Location) as string[];

const cowSchema = z.object({
  name: z.string({
    required_error: "that is required",
  }),
  age: z.number({
    required_error: "that is required",
  }),
  price: z.number({
    required_error: "that is required",
  }),
  location: z.enum([...Location] as [string, ...string[]]),
  breed: z.enum([...Breed] as [string, ...string[]]),
  weight: z.number({
    required_error: "that is required",
  }),
  label: z.enum([...Label] as [string, ...string[]]),
  category: z.enum([...Category] as [string, ...string[]]),
  seller: z.string({
    required_error: "that is required",
  }),
});

export const CowValidationSchema = {
  cowSchema,
};
