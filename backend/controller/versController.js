import * as VersRepository from "../repository/versRepository.js";

import {Router} from "express"
const endpoints = Router();

endpoints.get("/ListVers", async (req,resp) => {
    const table = await VersRepository.ListTable();
    resp.send(table);
})

endpoints.post("/InsertVers", async (req,resp) => {
    const dados = req.body;
    const id = await VersRepository.InsertVers(dados);
    resp.send({NewId: id})
})

export default endpoints