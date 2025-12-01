import { connection } from "../connections.js";

export async function AdicionarADM(dados){
    const InserirADM = `
        INSERT INTO Admins (id_user, nameADM)
        VALUES (?,?);

        UPDATE Cadastro
            SET admin = true
        WHERE id_user = ?;
    `


    const [InsertAdmin] = await connection.query(command, [
        dados.id_user,
        dados.nameADM,
        dados.id_user
    ])
}

export async function RemoverADM(dados){
    const RemoverADM = `
        DELETE FROM Admins
            WHERE id_Admin = ?;

        UPDATE Cadastro
            SET admin = false
        WHERE id_user = ?;
    `

    const [Del] = await connection.query(RemoverADM, [
        dados.id_Admin,
        dados.id_user
    ]);

    return Del;
}