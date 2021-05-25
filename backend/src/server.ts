import cors from "cors";
import express from "express";

import "./database";

import { routes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.get("/", (request, response) => {
  return response.json({ message: "Welcome to the Cep Mais backend" });
});

app.listen(3333, () => console.log("Server is running 🚀️"));
