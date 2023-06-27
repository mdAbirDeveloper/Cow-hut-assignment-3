import express from "express";
import { BuyerRoutes } from "../app/module/buyer/buyer.route";
import { SellerRoute } from "../app/module/seller/seller.route";
import { CowRoutes } from "../app/module/cow/cow.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/buyer",
    route: BuyerRoutes.router,
  },
  {
    path: "/seller",
    route: SellerRoute.router,
  },
  {
    path: "/cow",
    route: CowRoutes.router,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
