import { IBuyer } from "./buyer.interface";
import { Buyer } from "./buyer.model";

const createBuyer = async (payload: IBuyer) => {
  const newBuyer = await Buyer.create(payload);
  return newBuyer;
};

export const BuyerService = {
  createBuyer,
};
