import { Request, Response } from "express";
import catchAsync from "../../../shard/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../../shard/sendResponse";
import { BuyerService } from "./buyer.service";

const createBuyer = async (req: Request, res: Response) => {
  const result = await BuyerService.createBuyer(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "buyer is created successfully",
    data: result,
  });
};

export const BuyerControllar = {
  createBuyer,
};
