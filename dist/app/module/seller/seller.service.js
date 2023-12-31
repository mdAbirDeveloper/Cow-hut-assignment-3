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
exports.SellerService = void 0;
const seller_model_1 = require("./seller.model");
const createSeller = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seller_model_1.Seller.create(payload);
    return result;
});
const getSingleSeller = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seller_model_1.Seller.findById(id);
    return result;
});
const updateSeller = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seller_model_1.Seller.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteSeller = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seller_model_1.Seller.findByIdAndDelete(id);
    return result;
});
exports.SellerService = {
    createSeller,
    getSingleSeller,
    updateSeller,
    deleteSeller,
};
