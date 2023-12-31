import { Model } from "mongoose";

export type IBuyer = {
  password: string;
  role: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

export type BuyerModel = Model<IBuyer>;
