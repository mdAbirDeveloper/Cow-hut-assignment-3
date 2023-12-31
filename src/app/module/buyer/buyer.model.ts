import mongoose, { Schema } from "mongoose";
import { IBuyer } from "./buyer.interface";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { buyerRole } from "./buyer.constant";

const BuyerSchema: Schema<IBuyer> = new Schema<IBuyer>(
  {
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: buyerRole,
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

BuyerSchema.pre("save", async function (next) {
  const isExist = await Buyer.findOne({
    // name: this.name,
    role: this.role,
    phoneNumber: this.phoneNumber,
    password: this.password,
  });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, "this buyer is already exist !");
  }
  next();
});

export const Buyer = mongoose.model<IBuyer>("Buyer", BuyerSchema);
