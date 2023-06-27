"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerControllar = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shard/sendResponse"));
const buyer_service_1 = require("./buyer.service");
const catchAsync_1 = __importDefault(require("../../../shard/catchAsync"));
const createBuyer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield buyer_service_1.BuyerService.createBuyer(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "buyer is created successfully",
        data: result,
    });
});
const getSingleBuyer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield buyer_service_1.BuyerService.getSingleBuyer(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Semester retrieved successfully !",
        data: result,
    });
}));
const updateBuyer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield buyer_service_1.BuyerService.updateBuyer(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "buyer updated successfully !",
        data: result,
    });
}));
const deleteBuyer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield buyer_service_1.BuyerService.deleteBuyer(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Buyer deleted successfully !",
        data: result,
    });
}));
exports.BuyerControllar = {
    createBuyer,
    getSingleBuyer,
    updateBuyer,
    deleteBuyer,
};
