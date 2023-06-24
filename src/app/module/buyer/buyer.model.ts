import mongoose, { Schema } from "mongoose";
import { IBuyer, UserRole } from "./buyer.interface";

const BuyerSchema: Schema<IBuyer> = new Schema<IBuyer>(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [UserRole.Buyer],
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

export const Buyer = mongoose.model<IBuyer>("Buyer", BuyerSchema);
