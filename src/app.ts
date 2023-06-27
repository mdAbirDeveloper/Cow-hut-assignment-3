import express, { Application, NextFunction, Request, Response } from "express";
import router from "./route";
import globalErrorHandler from "./app/middlewere/globalErrorHandler";
var cors = require("cors");
const app: Application = express();
const port = 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("it's from cow hut");
  next();
});

app.use(globalErrorHandler);

export { app, port };
