import mongoose, { Schema } from "mongoose";
import { ISeller } from "./seller.interface";
import { sellerRole } from "./seller.constant";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const sellerSchema = new Schema<ISeller>(
  {
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: sellerRole,
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

sellerSchema.pre("save", async function (next) {
  const isExist = await Seller.findOne({
    phoneNumber: this.phoneNumber,
    name: this.name,
  });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, "this seller is already exist !");
  }
  next();
});

export const Seller = mongoose.model<ISeller>("seller", sellerSchema);
