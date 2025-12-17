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
        SELECT vers, id_Vers FROM VersiculosUser
            WHERE vers = ?
    `

    const [versiculos] = await connection.query(command,Versiculo)
    return versiculos[0];
}


export async function InserirVersiculoUser(Dados) {
    const Command = `
       INSERT INTO VersiculosUser (id_user, sentimento, desc_vers, vers, favorito)
        VALUES (?,?,?,?,?,?)
    `

    const [info] = await connection.query(Command, [
        Dados.id_user, 
        Dados.sentimento,
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
                    desc_vers = ?, 
                    vers = ?, 
                    favorito = ?
            WHERE id_user = ? AND id_Vers = ?
            
    `
    const [info] = await connection.query(Command, [
        Dados.sentimento,  
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

export async function FavoritarVersiculoUser(idUser, idVersiculo) {
    const command = `
        UPDATE VersiculosUser
            SET favorito = TRUE
        WHERE id_user = ? AND id_Vers = ?
    `
    const [info] = await connection.query(command, [idUser, idVersiculo]);
    return info;
}

export async function DesfavoritarVersiculoUser(idUser, idVersiculo) {
    const command = `
        UPDATE VersiculosUser
            SET favorito = FALSE
        WHERE id_user = ? AND id_Vers = ?
    `
    const [info] = await connection.query(command, [idUser, idVersiculo]);
    return info;
}

export async function FavoritarVersiculoGlobal(idUser, idVersiculo) {
    const command = `
        UPDATE VersiculosGlobal
            SET favorito = TRUE
        WHERE id_user = ? AND id_Vers = ?
    `
    const [info] = await connection.query(command, [idUser, idVersiculo]);
    return info;
}

export async function DesfavoritarVersiculoGlobal(idUser, idVersiculo) {
    const command = `
        UPDATE VersiculosGlobal
            SET favorito = FALSE
        WHERE id_user = ? AND id_Vers = ?
    `
    const [info] = await connection.query(command, [idUser, idVersiculo]);
    return info;
}

export async function ListarVersiculosFavoritos(idUser){
    const command = `
        SELECT * FROM VersiculosUser
            WHERE favorito = TRUE and id_user = ?
    `

    const [info] = await connection.query(command, [idUser]);
    return info;
}

export async function ListarVersiculosFavoritosGlobal(idUser){
    const command = `
        SELECT * FROM VersiculosGlobal
            WHERE favorito = TRUE and id_user = ?
    `

    const [info] = await connection.query(command, [idUser]);
    return info;
}