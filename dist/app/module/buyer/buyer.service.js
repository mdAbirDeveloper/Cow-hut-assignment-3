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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerService = void 0;
const buyer_model_1 = require("./buyer.model");
const createBuyer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newBuyer = yield buyer_model_1.Buyer.create(payload);
    return newBuyer;
});
const getSingleBuyer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield buyer_model_1.Buyer.findById(id);
    return result;
});
const updateBuyer = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield buyer_model_1.Buyer.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteBuyer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield buyer_model_1.Buyer.findByIdAndDelete(id);
    return result;
});
exports.BuyerService = {
    createBuyer,
    getSingleBuyer,
    updateBuyer,
    deleteBuyer,
};
