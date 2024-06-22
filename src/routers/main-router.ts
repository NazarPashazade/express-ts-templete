import { Request, Response, Router } from "express";

export const mainRouter = Router();

mainRouter.get(`/`, (_req: Request, res: Response) => {
  try {
    res.json(`Hello World!`);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
