import { connection } from "../connections.js";

export async function Login(dados){
    const DadosUser = `
        SELECT name, email, password FROM cadastro
            WHERE name = ? AND email = ?
    `

    const [Dados] = await connection.query(DadosUser, [
        dados.name,
        dados.email
    ])
    return Dados;
}