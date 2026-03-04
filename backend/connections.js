import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const connection = await mysql.createConnection({
    host: "yamabiko.proxy.rlwy.net",
    user: "root",
    password: "zfmRsSDenRhUvklUFByCghRjZMiCPUgn",
    port: 35039,
    database: "MgsEhTop",
    ssl: {
        rejectUnauthorized: false
    }
})

export { connection };


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