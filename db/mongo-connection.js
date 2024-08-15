const mongoose = require("mongoose");
const config = require('../config.json');

const env = process.env.NODE_ENV;
const username = config[env].dbUsername;
const password = config[env].dbPassword;
const dbName = config[env].dbName;

let connectionStr = config[env].dbConnectionStr.replace('$username$', username).replace('$password$', password).replace('$dbname$', dbName);
console.log(connectionStr);
let options = config[env].dbSettings;
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