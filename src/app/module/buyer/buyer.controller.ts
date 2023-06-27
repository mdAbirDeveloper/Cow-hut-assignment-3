import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../shard/sendResponse";
import { BuyerService } from "./buyer.service";
import catchAsync from "../../../shard/catchAsync";
import { IBuyer } from "./buyer.interface";

const createBuyer = async (req: Request, res: Response) => {
  const result = await BuyerService.createBuyer(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "buyer is created successfully",
    data: result,
  });
};

const getSingleBuyer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BuyerService.getSingleBuyer(id);

  sendResponse<IBuyer>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester retrieved successfully !",
    data: result,
  });
});

const updateBuyer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await BuyerService.updateBuyer(id, updatedData);

  sendResponse<IBuyer>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "buyer updated successfully !",
    data: result,
  });
});

const deleteBuyer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BuyerService.deleteBuyer(id);

  sendResponse<IBuyer>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Buyer deleted successfully !",
    data: result,
  });
});

export const BuyerControllar = {
  createBuyer,
  getSingleBuyer,
  updateBuyer,
  deleteBuyer,
};
