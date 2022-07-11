const mysql = require('mysql')

const connection = mysql.createConnection({ 
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
})

connection.connect((err) => { 
    (err) ? console.err("can't connecto to the database") : console.log("connected to mysql databse")
})

module.exports = connection