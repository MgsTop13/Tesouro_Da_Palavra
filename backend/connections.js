import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    local: "localhost",
    user: "root",
    password: "1234",
    database: "Mgs"
})

export { connection }

/*

    Termux:
        local: "localhost",
        user: "Mgs",
        password: "Potato10!",
        database: "Mgs"

    Frei:
        local: "localhost",
        user: "root",
        password: "1234",
        database: "Mgs"

*/ 