const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
        connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
        connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        port: process.env.PORT, 
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
};

connection.connect(function(err){
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;

