import { UserController } from "../interface_adapter/controller";
import express from "express";
export const router = express.Router();

const userController = new UserController();

router.get("/users", async (req: express.Request, res: express.Response) => {
  const result = await userController.index();
  res.send(result);
});

router.get(
  "/users/:id",
  async (req: express.Request, res: express.Response) => {
    const result = await userController.findUser(req);
    res.send(result);
  }
);

router.post("/users", async (req: express.Request, res: express.Response) => {
  const result = await userController.create(req);
  res.send(result);
});

router.delete(
  "/users/:id",
  async (req: express.Request, res: express.Response) => {
    const result = await userController.delete(req);
    res.send(result);
  }
);
