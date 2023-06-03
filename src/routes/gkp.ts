import { Router } from "express";
import { generateKeyPairSync } from "crypto";

export const GKPRouter = Router().get("/", async (_, res) => {
  // https://nodejs.org/docs/latest-v19.x/api/crypto.html#cryptogeneratekeypairsynctype-options
  const keyPair = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "der",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "der",
    },
  });

  const privateKey = keyPair.privateKey.toString("base64");
  const publicKey = keyPair.publicKey.toString("base64");

  res.json({
    success: true,
    privateKey,
    publicKey,
  });
});
