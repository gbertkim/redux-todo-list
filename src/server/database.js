const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

const todoDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'db'
})

todoDB.connect((err) => {
    console.log(err)
})

module.exports = todoDB;