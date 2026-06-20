import * as Cadastro from "../repository/cadastrorRepository.js"
import { generateToken, verifyToken } from "../utils/jwt.js"
import { Router } from "express"
import bcrypt from "bcryptjs"
import iplim from "iplim"

const limit = iplim({
    timeout: 10 * 60 * 1000,     // 10 minutes block
    limit: 10,             // 10 attempts
    window: 10 * 60 * 1000, // per 10 minutes
    statusCode: 429,
    message: `Muitas tentativas. Tente novamente depois`,
    verbose: true
});



const endpoints = Router();

endpoints.post('/Cadastro', limit, async (req, res) => {
    const dados = req.body;
    try {
        const emailsExistentes = await Cadastro.emailIgual(dados.email);
        const nomesExistentes = await Cadastro.NomeIgual(dados.name);
        const NomesBanco = nomesExistentes?.name ?? 'naotem';

        if (nomesExistentes === undefined && emailsExistentes === undefined) {
            const IdUser = await Cadastro.CadastroUser(dados);
            res.send({ NewID: IdUser });
        }
        else if ((NomesBanco === dados.name) || (emailsExistentes.email === dados.email)) {
            res.send("Já existe um usuario com esse nome ou email, tente outro!")
            return;
        } 

    } catch (error) {
        res.status(500).send({ OlhaOError: error.message });
        console.error(error)
    }

})

endpoints.post('/Login', limit, async (req, res) => {
    const dados = req.body;
    
    try {
        const LoginVerificar = await Cadastro.Login(dados)
        if (LoginVerificar.length === 0 ) return res.status(401).send("Usuário inexistente");

        const usuario = LoginVerificar[0];
        
        if(dados.password === undefined){
            return res.status(401).send("Insira sua senha!");
        }
        const isValid = await bcrypt.compare(dados.password, usuario.password)

        if ((usuario.email === dados.email || usuario.name === dados.name) && isValid) {
            let token = generateToken(usuario)
            res.send({ tokenGerado: token })
        } else {
            res.status(401).send("Campos inválidos")
        }

    } catch (error) {
        res.status(500).send({ OlhaOError: error.message })
    }
})

endpoints.post('/VerifyToken', (req,res) => {
    const {token} = req.body;
    try{
        const decoded = verifyToken(token);
        if(decoded.message === 'invalid token' || decoded.name === 'JsonWebTokenError'){
            return res.status(403).send('Acesso negado/invalido!')
        }

        res.send({
            acesso: 'Autorizado!',
            decoded
        })

    } catch(error){
        res.send(error)
    }
})

endpoints.put('/RecuperarSenha/:idUser', limit, async (req, res) => {
    const { novaSenha, palavraRecuperacao } = req.body;
    const idUser = req.params.idUser;
    
    try {
        //Pega os dados do usuario no banco atraves do id
        const palavraBanco = await Cadastro.DadosUser(idUser);

        //Pega o primeiro resultado do array
        const dadosUser = palavraBanco[0];

        if (palavraRecuperacao !== dadosUser.palavraRecuperacao) {
            res.status(403).send("A palavra de recuperação tá errada!")
        } else if (palavraRecuperacao === dadosUser.palavraRecuperacao) {
            const palavraRecuperada = await Cadastro.RecuperarSenha(dadosUser, novaSenha) //Envia pro banco a nova senha que deve ser alterada e os dados do usuario
            res.send(palavraRecuperada)
        }
        if (dadosUser === undefined) {
            res.status(404).send("Usuário não encontrado!")
        }
    } catch (error) {
        res.status(500).send({ OlhaOError: error.message })
        console.error(error)
    }
})

export default endpoints;