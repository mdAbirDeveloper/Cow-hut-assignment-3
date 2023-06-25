import mongoose, { Date, Model } from "mongoose";

export enum UserRole {
  Seller = "seller",
  Buyer = "buyer",
}

export type IBuyer = {
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
  // createdAt: Date | undefined;
  // updatedAt: Date | undefined;
};

export type BuyerModel = Model<IBuyer>;
