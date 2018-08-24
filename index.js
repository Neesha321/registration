/*Importing Dependencies/Modules */
const express = require('express');
const mongoose = require('mongoose');
const portNum = process.env.PORT || 3400;
const bodyParser = require('body-parser');
const route = require('./Services/routes');
const dbConn = require('./Services/dbConnect');


/*Creating instance of Express module*/
const app = express();


/*Database connection*/
dbConn.dbConnection();

/*Middleware Function*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


route(app);


/*Port Activation*/

app.listen(portNum, function (err) {
    if (err) {

    }
    console.log("Port " + portNum + " has been activated");
});
