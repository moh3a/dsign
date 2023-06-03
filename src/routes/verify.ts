import { Router } from "express";
import { createPublicKey, createVerify } from "crypto";

export const VerifyRouter = Router().post("/", (req, res) => {
  const { data, signature } = req.body;
  let publicKey = req.body.publicKey;

  // https://nodejs.org/docs/latest-v19.x/api/crypto.html#cryptocreatepublickeykey
  publicKey = createPublicKey({
    key: Buffer.from(publicKey, "base64"),
    type: "spki",
    format: "der",
  });

  const verify = createVerify("sha256");
  verify.update(data);
  verify.end();

  const result = verify.verify(publicKey, Buffer.from(signature, "base64"));

  res.json({ success: true, verify: result });
});
