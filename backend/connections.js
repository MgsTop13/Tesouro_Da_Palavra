import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    local: "localhost",
    user: "Mgs",
    password: "Potato10!",
    database: "Mgs"
})

export {connection}