import { Router } from "express";
import { createPrivateKey, createSign } from "crypto";

export const SignRouter = Router().post("/", (req, res) => {
  const data = req.body.data;
  let privateKey = req.body.privateKey;

  // https://nodejs.org/docs/latest-v19.x/api/crypto.html#cryptocreateprivatekeykey
  privateKey = createPrivateKey({
    key: Buffer.from(privateKey, "base64"),
    type: "pkcs8",
    format: "der",
  });

  // https://nodejs.org/docs/latest-v19.x/api/crypto.html#cryptocreatesignalgorithm-options
  const sign = createSign("sha256");
  sign.update(data);
  sign.end();

  const signature = sign.sign(privateKey).toString("base64");

  res.json({ success: true, signature, data });
});
