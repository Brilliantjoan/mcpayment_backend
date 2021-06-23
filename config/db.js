const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DBHost,
  database: process.env.DBName,
  user: process.env.DBUser,
  password: process.env.DBPassword
})

module.exports = connection
