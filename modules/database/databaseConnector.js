var mysql = require('mysql');
var path = require('path');
var config = require(path.resolve('./', 'config'));

var con = mysql.createConnection({
    host: config.databaseHost,
    user: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseDatabaseName,
    multipleStatements: true
});

con.connect(function (err) {
    if (err) {
        //logger.error('Error connecting to Database',err)
        console.log(err);
        return;
    } 
     console.log('Connection established');
    //logger.info('Connection established')
});

module.exports = con;
