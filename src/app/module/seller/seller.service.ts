import { ISeller } from "./seller.interface";
import { Seller } from "./seller.model";

const createSeller = async (payload: ISeller) => {
  const result = await Seller.create(payload);
  return result;
};

const getSingleSeller = async (id: string): Promise<ISeller | null> => {
  const result = await Seller.findById(id);
  return result;
};

const updateSeller = async (
  id: string,
  payload: Partial<ISeller>
): Promise<ISeller | null> => {
  const result = await Seller.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSeller = async (id: string): Promise<ISeller | null> => {
  const result = await Seller.findByIdAndDelete(id);
  return result;
};

export const SellerService = {
  createSeller,
  getSingleSeller,
  updateSeller,
  deleteSeller,
};
