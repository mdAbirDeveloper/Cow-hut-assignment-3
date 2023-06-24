import express from "express";
// import { UserRoutes } from "../modules/user/user.route";
// import { AcademicSemestreRoutes } from "../modules/academicSemester/academicSemester.route";
// import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
// import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.routes";
// import { StudentRoutes } from "../modules/student/student.route";
import { BuyerService } from "../app/module/buyer/buyer.service";
import { BuyerRoutes } from "../app/module/buyer/buyer.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: BuyerRoutes.router,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
