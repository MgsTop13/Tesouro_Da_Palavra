import * as VersRepository from "../repository/versRepository.js";

import {Router} from "express"
const endpoints = Router();

endpoints.get("/ListarVersiculosUser", async (req,res) => {
    const {id_User} = req.body;
    const Versiculos = await VersRepository.ListarVersiculosUser(id_User);
    res.send(Versiculos);
})

endpoints.post("/InserirVersiculoUser", async (req,res) => {
    const dados = req.body;
    
    try{
        const VersiculosSalvos = await VersRepository.VerificarVersiculo(dados.vers);
        //Se retornar algo ele n deixa inserir
        if(VersiculosSalvos && VersiculosSalvos.length > 0){
            res.send("Já Tem!");
            return;
        }
            
        const id = await VersRepository.InserirVersiculoUser(dados);
        res.send({IdVersiculo: id})
        
    } catch(error){
        res.status(500).send({OlhaOError: error.message });
    }
})

endpoints.put("/Edit/:idVersiculo", async (req,res) => {
    const dados = req.body;
    const idVersiculo = req.params.idVersiculo;
    const idVers = await VersRepository.EditarVersiculos(dados, idVersiculo);
    res.send({EditId: idVers});
})

endpoints.delete("/Del/:idVers/:idUser", async (req,res) => {
    const idVers = req.params.idVers;
    const idUser = req.params.idUser;
    const idtable = await VersRepository.DelVers(idVers, idUser);
    res.send({RemovedID: idtable});
})

export default endpoints;