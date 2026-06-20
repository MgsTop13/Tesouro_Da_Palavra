import { connection } from "../connections.js";
import bcrypt from "bcryptjs";

export async function CadastroUser(dados){
    const pass = await bcrypt.hash(dados.password, 10); //Gera a senha em modo hash
    const command = `
        INSERT INTO cadastro (name, email, password, dataNasc, admin, palavraRecuperacao)
            VALUES(?,?,?,?,?,?);
    `


    const [registro] = await connection.query(command,[
        dados.name,
        dados.email,
        pass, //Inserimos o hash
        dados.dataNasc,
        dados.admin,
        dados.palavraRecuperacao
    ]);

    return registro;
};

export async function DadosUser(idUser){
    const DadosUser = `
        SELECT * FROM cadastro
            WHERE id_user = ?;
    `
    const [dados] = await connection.query(DadosUser, idUser);
    return dados;
};

export async function Login(dados){
    const DadosUser = `
        SELECT name, email, password FROM cadastro
            WHERE name = ? OR email = ?;
    `

    const [Dados] = await connection.query(DadosUser, [
        dados.name, 
        dados.email
    ]);

    return Dados;
};


export async function RecuperarSenha(dadosUser, novaSenha){
    const pass = await bcrypt.hash(novaSenha, 10);
    
    const AtualizarSenha = `
        UPDATE cadastro
            SET password = ?
        WHERE id_user = ?
    `

    const [sucesso] = await connection.query(AtualizarSenha, [
        pass,
        dadosUser.id_user
    ]);

    return sucesso
}

export async function NomeIgual(name){
    const command = `
        select name from cadastro
        where name = ?
    `

    const [nomesExistentes] = await connection.query(command, name)
    return nomesExistentes[0];
}

export async function emailIgual(email){
    const command = `
        select email from cadastro
            where email = ?
    `
    const [emailsExistentes] = await connection.query(command, email);
    return emailsExistentes[0];
}