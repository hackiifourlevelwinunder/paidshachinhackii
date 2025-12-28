import express from "express";
import fs from "fs";
import cors from "cors";
import crypto from "crypto";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let UID_DATA = JSON.parse(fs.readFileSync("./uids.json"));

app.get("/rng", (req, res) => {
  // REAL Cryptography Secure RNG
  const number = crypto.randomInt(0, 10);
  res.json({ number });
});

app.post("/verify", (req, res) => {
  const { uid } = req.body;
  if (UID_DATA.includes(uid)) {
    return res.json({ status: true });
  }
  res.json({ status: false });
});

app.post("/addUid", (req, res) => {
  const { uid, username, password } = req.body;

  if (username !== "sachinpanel" || password !== "Janu@123")
    return res.status(401).json({ message: "Unauthorized" });

  UID_DATA.push(uid);
  fs.writeFileSync("uids.json", JSON.stringify(UID_DATA, null, 2));
  res.json({ message: "UID added successfully" });
});

app.listen(5000, () => console.log("Server Running on 5000"));