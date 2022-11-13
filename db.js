const pg = require('pg')
const pool = new pg.Pool({
    user: "postgres", // user which you autentificate in PSQL
    password: '3322', // password from my database
    host: "localhost", // type of the host where databases placed (?)
    port: 5433, // port of your databases ( setted due installing )
    database: "node_postgres" // name of your databases ( by default exists database with name = postgres )
})

module.exports = pool
