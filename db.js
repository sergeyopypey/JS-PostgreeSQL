const pg = require('pg')
const pool = new pg.Pool({
    user: "postgres",
    password: '3322',
    host: "localhost",
    port: 5433,
    database: "node_postgres"
})

module.exports = pool
