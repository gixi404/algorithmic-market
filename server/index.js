import express from "express";
import path from "path";
import { config } from "dotenv";
import PayRoute from "./routes/pay.routes.js";
import cors from "cors";
config();

export const app = express(),
  PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.static(path.resolve("src/components")));
app.use(PayRoute);

app.listen(PORT, console.log("running on port", PORT));
