import * as VersRepository from "../repository/versRepository.js";

import {Router} from "express"
const endpoints = Router();

endpoints.get("/List", async (req,resp) => {
    const table = await VersRepository.ListTable();
    resp.send(table);
})

endpoints.post("/Insert", async (req,resp) => {
    const dados = req.body;
    const id = await VersRepository.InsertVers(dados);
    resp.send({NewId: id})
})

endpoints.put("/Edit/:id", async (req,resp) => {
    const dados = req.body;
    const id = req.params.id;
    const idtable = await VersRepository.EditVers(id, dados);
    resp.send({EditId: idtable});
})

endpoints.delete("/Del/:id", async (req,resp) => {
    const dados = req.body;
    const id = req.params.id;
    const idtable = await VersRepository.DelVers(id, dados);
    resp.send({RemovedID: idtable});
})


export default endpoints