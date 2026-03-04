import { connection } from "../connections.js";



export async function Login(dados){
    const DadosUser = `
        SELECT id_user, name, email, password, dataNasc, palavraRecuperacao FROM cadastro
            WHERE name = ? AND email = ? AND password = MD5(?)
    `

    const [Dados] = await connection.query(DadosUser, [
        dados.name,
        dados.email,
        dados.password
    ])
    return Dados;
}