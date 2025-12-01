import { connection } from "../connections.js";


export async function CadastroUser(dados){
    console.log(dados)
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

export async function RecuperarSenha(dadosUser){
    const AtualizarSenha = `
        UPDATE cadastro
            SET password = MD5(?)
        WHERE id_user = ?
    `

    const [sucesso] = await connection.query(AtualizarSenha, [
        dadosUser.password, 
        dadosUser.idUser
    ])
}