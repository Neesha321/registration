const mongoose = require('mongoose');


function dbConnection(){
    mongoose.connect('mongodb://localhost:27017/database', {useNewUrlParser: true});

    var connection = mongoose.connection;
    connection.on('connected', function () {
        console.log("Connected to Database");
    });

    connection.on('disconnected', function () {
        console.log("Disconnected to Database");
    });

    connection.on('error', function (err) {
        console.log("Error in connection", err.stack);
    });

    /*When signal interrupts the process*/
    process.on('SIGINT', function () {
        connection.close(function () {
            console.log("Database Connection Closed");
        });
    });

}


module.exports = {
    dbConnection
}