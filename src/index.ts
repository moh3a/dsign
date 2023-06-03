import { config } from "dotenv";
config();

import express from "express";
import { IndexRouter, GKPRouter, SignRouter, VerifyRouter } from "./routes";

const port = process.env.PORT;
const app = express();

app.use("/", IndexRouter);
app.use("/generate-key-pair", GKPRouter);
app.use("/sign", SignRouter);
app.use("/verify", VerifyRouter);

app.listen(port, () => {
  console.log(`[server] Server is running at http://localhost:${port}`);
});
