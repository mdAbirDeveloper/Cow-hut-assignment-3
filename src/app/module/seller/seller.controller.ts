import { Request, Response } from "express";
import { BuyerService } from "../buyer/buyer.service";
import sendResponse from "../../../shard/sendResponse";
import httpStatus from "http-status";
import { SellerService } from "./seller.service";
import catchAsync from "../../../shard/catchAsync";
import { ISeller } from "./seller.interface";

const createSeller = async (req: Request, res: Response) => {
  const result = await SellerService.createSeller(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "seller is created successfully",
    data: result,
  });
};

const getSingleSeller = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await SellerService.getSingleSeller(id);

  sendResponse<ISeller>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester retrieved successfully !",
    data: result,
  });
});

const updateSeller = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await SellerService.updateSeller(id, updatedData);

  sendResponse<ISeller>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Seller updated successfully !",
    data: result,
  });
});
const deleteSeller = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await SellerService.deleteSeller(id);

  sendResponse<ISeller>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Seller deleted successfully !",
    data: result,
  });
});

export const SellerController = {
  createSeller,
  getSingleSeller,
  updateSeller,
  deleteSeller,
};
