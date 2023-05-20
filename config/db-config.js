require('dotenv').config()

module.exports = {
    host: process.env.AZURE_MYSQL_HOST,
    database: process.env.AZURE_MYSQL_DATABASE,
    user: process.env.AZURE_MYSQL_USER,
    password: process.env.AZURE_MYSQL_PASSWORD
}