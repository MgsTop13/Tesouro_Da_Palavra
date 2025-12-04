import * as Cadastro from "../repository/cadastrorRepository.js"
import * as Login from "../repository/loginRepository.js"
import {generateToken} from "../utils/jwt.js"
import { Router } from "express"
import md5 from "md5"

const endpoints = Router();

endpoints.post('/Cadastro', async (req,res) => {
    const dados = req.body;
    try{
        const emailsExistentes = await Cadastro.emailIgual(dados.email);
        const nomesExistentes = await Cadastro.NomeIgual(dados.name);
        
        if(nomesExistentes.name === dados.name){
            res.send("Já existe um usuario com esse nome!")
        } else if(emailsExistentes.email === dados.email){
            res.send("Já existe um usuario com esse email!")
        } else if(emailsExistentes.email === undefined || nomesExistentes.name === undefined){
            const IdUser = await Cadastro.CadastroUser(dados);
            res.send({NewID: IdUser});
        } 
    } catch(error){
         res.status(500).send({OlhaOError: error.message});
         console.error(error)
    }
    
})

endpoints.get('/Login',  async (req,res) => {
    const dados = req.body;
    try{
        const LoginVerificar = await Login.Login(dados);
        if(!LoginVerificar || LoginVerificar === undefined  || LoginVerificar.length === 0|| LoginVerificar === null){
            return res.status(401).send("Usuário inexistente"); 
        }

        const usuario = LoginVerificar[0];
        const senhaMD5 = md5(dados.password)

        if(usuario.email === dados.email && usuario.name === dados.name && usuario.password === senhaMD5){
            const userInfo = {
                name: usuario.name,
                email: usuario.email,
                password: usuario.password,
                role: usuario.role || 'user'
            };

            let token = generateToken(userInfo)
            res.send({tokenGerado: token})
        } else if(usuario.email !== dados.email || usuario.name !== dados.name ||  usuario.password !== senhaMD5){
            res.status(401).send("Algo ta errado ae akakka")
        } 

    } catch(error){
        res.status(500).send({OlhaOError: error.message})
    }
})

endpoints.put('/RecuperarSenha/:idUser', async (req,res) => {
    const dados = req.body;
    const idUser = req.params.idUser;
    
    try{
        const palavraBanco = await Cadastro.DadosUser(idUser);
        const dadosUser = palavraBanco[0];
        res.send(dadosUser)
        if(dadosUser === undefined){
            res.status(404).send("Usuário não encontrado!")
        }
    } catch(error){
        res.status(500).send({OlhaOError: error.message})
        console.error(error)
    }
})

export default endpoints;