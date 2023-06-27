import mongoose from "mongoose";
import { app, port } from "./app";
import config from "./config/index";
import { Server } from "http";

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});

let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("data base is connected successfully");

    server = app.listen(port, () => {
      console.log(`Application listening on port ${port}`);
    });
  } catch (error) {
    console.log("faild to connect database", error);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on("SIGTERM", () => {
  console.log("sigterm is received");
  if (server) {
    server.close();
  }
});
