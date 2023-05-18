const mysql = require('mysql');

let config = require('../config/db-config');

const con = mysql.createConnection(config);


async function connect() {
    try {
      await con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to database successfully!");
      });
    } catch (err) {
      console.error('Error connecting to the database:', err);
    }
  }
  
  module.exports = { connect, con };

