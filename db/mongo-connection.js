const mongoose = require("mongoose");
const config = require('../config.json');

const username = config[process.env.NODE_ENV].dbUsername;
const password = config[process.env.NODE_ENV].dbPassword;
const dbName = config[process.env.NODE_ENV].dbName;

let connectionStr = config[process.env.NODE_ENV].dbConnectionStr.replace('$username$', username).replace('$password$', password).replace('$dbname$', dbName);
console.log(connectionStr);
let options = config[process.env.NODE_ENV].dbSettings;
mongoose.connect(connectionStr, options);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("connected", function() {
    console.log("Mongo deafult connection established");
});

db.on("disconnected", function() {
    console.log("Server disconnected from mongoDB");
});

db.on("error", function(err) {
    console.log("Error while connection mongoDB", err);
});