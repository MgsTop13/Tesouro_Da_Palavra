/*
create table tb_Vers(
    -> id_Vers int primary key auto_increment,
    -> sentimento varchar(50),
    -> descricao varchar(255),
    -> desc_vers varchar(255),
    -> vers varchar(255)
    -> );
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