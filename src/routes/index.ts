import { Router } from "express";

export const IndexRouter = Router().get("/", (_, res) => {
  res.json({ message: "Nothing to see here. check the /generate-key-pair" });
});

export * from "./gkp";
export * from "./sign";
export * from "./verify";
