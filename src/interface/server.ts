import express from "express";
import { router } from "./router";

export const serve = () => {
  const app = express();

  // bodyがundefinedにならないように
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use("/api", router);

  app.listen(3000, (): void => {
    console.log("listening on port 3000");
  });
};
