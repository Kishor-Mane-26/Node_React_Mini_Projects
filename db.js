let mysql = require("mysql2/promise");
require("dotenv").config();

let conn=mysql.createConnection({
    host:process.env.dbhost,
    user:process.env.dbuser,
    password:process.env.dbpass,
    database:process.env.dbname
});

module.exports=conn;