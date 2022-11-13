const mysql = require('mysql');
const jsonfile = require('jsonfile');
const config = jsonfile.readFileSync('config.json')

const connection = (database) => mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.password,
    database: database.database,
})


module.exports = connection;