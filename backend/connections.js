import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    local: "localhost",
    user: "MgsTop13",
    password: "Potato10!",
    database: "Versiculos"
})

export { connection }

/*

    Termux:
        local: "localhost",
        user: "Mgs",
        password: "Potato10!",
        database: "Mgs"

    PC:
        local: "localhost",
        user: "Mgs",
        password: "1234",
        database: "Mgs"

*/ 