import mongoose, { Model } from "mongoose";

export enum UserRole {
  Seller = "seller",
  Buyer = "buyer",
}

export type IBuyer = {
  _id: mongoose.Schema.Types.ObjectId;
  password: string;
  role: UserRole;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type BuyerModel = Model<IBuyer>;
