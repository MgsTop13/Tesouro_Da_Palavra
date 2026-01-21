import { supabase } from "../supabase.js";



export async function CadastroUser(dados){
    const command = `
        INSERT INTO cadastro (name, email, password, dataNasc, admin, palavraRecuperacao)
            VALUES(?,?,MD5(?),?,?,?);
    `


    const [registro] = await connection.query(command,[
        dados.name,
        dados.email,
        dados.password,
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
}

export async function RecuperarSenha(dadosUser, novaSenha){
    const AtualizarSenha = `
        UPDATE cadastro
            SET password = MD5(?)
        WHERE id_user = ?
    `

    const [sucesso] = await connection.query(AtualizarSenha, [
        novaSenha,
        dadosUser.id_user
    ])
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