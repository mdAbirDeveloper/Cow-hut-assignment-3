import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../shard/sendResponse";
import { CowService } from "./cow.service";
import catchAsync from "../../../shard/catchAsync";
import pick from "../../../shard/pick";
import { paginationFields } from "../../../cosntant/paginationFields";
import { ICow } from "./cow.interface";
import { cowFilterableFields } from "./cow.constant";

const createCow = async (req: Request, res: Response) => {
  const result = await CowService.createCow(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow is created successfully",
    data: result,
  });
};

const GetAllCow = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, cowFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await CowService.GetAllCow(filters, paginationOptions);

  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semesters retrieved successfully !",
    meta: result.meta,
    data: result.data,
  });
});

const updateCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await CowService.updateCow(id, updatedData);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "cow updated successfully !",
    data: result,
  });
});
const deleteCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CowService.deleteCow(id);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "cow deleted successfully !",
    data: result,
  });
});

export const CowControllar = {
  createCow,
  GetAllCow,
  updateCow,
  deleteCow,
};
