import * as VersRepository from "../repository/versRepository.js";
import {Router} from "express"
const endpoints = Router();

endpoints.get("/ListarVersiculosUser/:idUser", async (req,res) => {
    const id_User = req.params.idUser;
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

endpoints.put("/FavoritarVersiculo/:idUser/:idVers", async (req,res) => {
    const idUser = req.params.idUser;
    const idVers = req.params.idVers;

    try{
        const respostaBanco = await VersRepository.FavoritarVersiculoUser(idUser, idVers);
        res.send({respBanco: respostaBanco})
    } catch(error){
        console.error(error);
        res.send({OlhaOError: error})
    }
})

endpoints.put("/DesfavoritarVersiculo/:idUser/:idVers", async (req,res) => {
    const idUser = req.params.idUser;
    const idVers = req.params.idVers;

    try{
        const respostaBanco = await VersRepository.DesfavoritarVersiculoUser(idUser, idVers);
        res.send({respBanco: respostaBanco})
    } catch(error){
        console.error(error);
        res.send({OlhaOError: error})
    }
})

endpoints.put("/FavoritarVersiculoGlobal/:idUser/:idVers", async (req,res) => {
    const idUser = req.params.idUser;
    const idVers = req.params.idVers;

    try{
        const respostaBanco = await VersRepository.FavoritarVersiculoGlobal(idUser, idVers);
        res.send({respBanco: respostaBanco})
    } catch(error){
        console.error(error);
        res.send({OlhaOError: error})
    }
})

endpoints.put("/DesfavoritarVersiculoGlobal/:idUser/:idVers", async (req,res) => {
    const idUser = req.params.idUser;
    const idVers = req.params.idVers;

    try{
        const respostaBanco = await VersRepository.DesfavoritarVersiculoGlobal(idUser, idVers);
        res.send({respBanco: respostaBanco})
    } catch(error){
        console.error(error);
        res.send({OlhaOError: error})
    }
})

endpoints.get("/ListarVersiculoFavorito/:idUser", async (req,res) => {
    const idUser= req.params.idUser;

    try{
        const versiculosFavoritados = await VersRepository.ListarVersiculosFavoritos(idUser);    
        res.send(versiculosFavoritados)
    } catch(error){
        res.send({OlhaOError: error});
        console.error(error);
    }
})

endpoints.get("/ListarVersiculoFavoritoGlobal/:idUser", async (req,res) => {
    const idUser= req.params.idUser;

    try{
        const versiculosFavoritados = await VersRepository.ListarVersiculosFavoritosGlobal(idUser);    
        res.send(versiculosFavoritados)
    } catch(error){
        res.send({OlhaOError: error});
        console.error(error);
    }
})

export default endpoints;