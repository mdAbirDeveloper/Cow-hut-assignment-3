"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const buyer_route_1 = require("../app/module/buyer/buyer.route");
const seller_route_1 = require("../app/module/seller/seller.route");
const cow_route_1 = require("../app/module/cow/cow.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/buyer",
        route: buyer_route_1.BuyerRoutes.router,
    },
    {
        path: "/seller",
        route: seller_route_1.SellerRoute.router,
    },
    {
        path: "/cow",
        route: cow_route_1.CowRoutes.router,
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
