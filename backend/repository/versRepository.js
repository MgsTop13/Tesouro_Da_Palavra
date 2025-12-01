import { connection } from "../connections.js";

export async function ListarVersiculosUser(idUser) {
    const Command = `
       SELECT * FROM VersiculosUser
        WHERE id_user = ?
    `;
    const [info] = await connection.query(Command, idUser)
    return info;
}

export async function VerificarVersiculo(Versiculo){
    const command = `
        SELECT vers FROM VersiculosUser
            WHERE vers = ?
    `

    const [versiculos] = await connection.query(command,Versiculo)
    return versiculos;
}


export async function InserirVersiculoUser(Dados) {
    const Command = `
       INSERT INTO VersiculosUser (id_user, sentimento, descricao, desc_vers, vers, favorito)
        VALUES (?,?,?,?,?,?)
    `

    const [info] = await connection.query(Command, [
        Dados.id_user, 
        Dados.sentimento, 
        Dados.descricao, 
        Dados.desc_vers,
        Dados.vers, 
        Dados.favorito
    ])
    return info.InsertId;
}

export async function EditarVersiculos(Dados, idVers) {
    const Command = `
        UPDATE VersiculosUser
            SET sentimento = ?, 
                    descricao = ?, 
                    desc_vers = ?, 
                    vers = ?, 
                    favorito = ?
            WHERE id_user = ? AND id_Vers = ?
            
    `
    const [info] = await connection.query(Command, [
        Dados.sentimento, 
        Dados.descricao, 
        Dados.desc_vers, 
        Dados.vers, 
        Dados.favorito,
        Dados.id_user,
        idVers
    ])

    return info;
}

export async function DelVers(idVers, idUser) {
    const Command = `
        DELETE FROM VersiculosUser
        WHERE id_Vers = ? and id_user = ?;
    `

    const [info] = await connection.query(Command, [idVers, idUser]);
    return info
}