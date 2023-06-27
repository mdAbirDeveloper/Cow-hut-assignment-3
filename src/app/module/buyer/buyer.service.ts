import { IBuyer } from "./buyer.interface";
import { Buyer } from "./buyer.model";

const createBuyer = async (payload: IBuyer) => {
  const newBuyer = await Buyer.create(payload);
  return newBuyer;
};

const getSingleBuyer = async (id: string): Promise<IBuyer | null> => {
  const result = await Buyer.findById(id);
  return result;
};

const updateBuyer = async (
  id: string,
  payload: Partial<IBuyer>
): Promise<IBuyer | null> => {
  const result = await Buyer.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBuyer = async (id: string): Promise<IBuyer | null> => {
  const result = await Buyer.findByIdAndDelete(id);
  return result;
};

export const BuyerService = {
  createBuyer,
  getSingleBuyer,
  updateBuyer,
  deleteBuyer,
};
