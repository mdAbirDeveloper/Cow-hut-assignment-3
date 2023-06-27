import { Model } from "mongoose";

export type ISeller = {
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

export type SellerMode = Model<ISeller>;
