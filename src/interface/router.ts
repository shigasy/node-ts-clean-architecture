import express from "express";
export const router = express.Router();

router.get("/users", async (req: express.Request, res: express.Response) => {
  res.send("aa");
});

router.get(
  "/users/:id",
  async (req: express.Request, res: express.Response) => {
    res.send("bb");
  }
);
