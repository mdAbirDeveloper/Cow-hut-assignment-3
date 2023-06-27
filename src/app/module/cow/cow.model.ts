import { Schema, model } from "mongoose";
import { ICow } from "./cow.interface";
import { Breed, Category, Label, Location } from "./cow.constant";

const CowSchema = new Schema<ICow>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      enum: Location,
    },
    breed: {
      type: String,
      required: true,
      enum: Breed,
    },
    weight: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
      enum: Label,
    },
    category: {
      type: String,
      required: true,
      enum: Category,
    },
    seller: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Cow = model<ICow>("Cow", CowSchema);
