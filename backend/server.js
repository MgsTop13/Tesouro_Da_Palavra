import express from "express";
import cors from "cors"
import {Rotas} from "./routes.js";
import iplim from "iplim";

const api = express();
const PORT = 5010;

api.use(express.json());
api.use(cors());

Rotas(api);

api.listen(PORT, () => console.log(`Port: ${PORT}`))