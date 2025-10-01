/*
create database Mgs;
use Mgs;

create table tb_Vers(
    id_Vers int primary key auto_increment,
    sentimento varchar(50),
    descricao varchar(255),
    desc_vers varchar(255),
	vers varchar(255)
);
*/

import {connection} from "../connections.js";

export async function ListTable(){
    const Command = `
       SELECT * FROM tb_Vers
    `
    
    const [info] = await connection.query(Command)
    return info;
}

export async function InsertVers(Vers){
    const Command = `
       INSERT INTO tb_Vers (sentimento, descricao, desc_vers, vers)
       values (?,?,?,?)
    `
    
    const [info] = await connection.query(Command,[
        Vers.sentimento,
        Vers.descricao,
        Vers.desc_vers,
        Vers.vers
        ])
    return info.InsertId;
}

export async function EditVers(id, VersEdit){
    const Command = `
        UPDATE tb_Vers
            SET sentimento = ?,
                descricao = ?,
                desc_vers = ?,
                vers = ?
        WHERE id_Vers = ?
    `

    const [info] = await connection.query(Command, [
        VersEdit.sentimento,
        VersEdit.descricao,
        VersEdit.desc_vers,
        VersEdit.vers,
        id
    ])

    return info;
}

export async function DelVers(id){
    const Command = `
        DELETE FROM tb_Vers
        WHERE id_Vers = ?
    `

    const [info] = await connection.query(Command, id);
    return info
}