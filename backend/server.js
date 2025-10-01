import express from "express";
import {Rotas} from "./routes.js";

const api = express();
const PORT = 5010;
api.use(express.json());

Rotas(api);

api.listen(PORT, () => console.log(`Up to port: ${PORT}`))