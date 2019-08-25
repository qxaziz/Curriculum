const mongoose = require('mongoose');
const chalk = require('chalk');

var dbURL = require('./properties').Connection;

var connected = chalk.bgGreen.bold.white;
var error = chalk.bgYellow.bold.white;
var disconnected = chalk.bgRed.bold.white;
var terminated = chalk.bgMagenta.bold.white;



module.exports = (colName)=>{

    mongoose.Promise = global.Promise;

    mongoose.connect(dbURL + colName, { useNewUrlParser: true });

    mongoose.connection.on('connected', ()=>{
        console.log(connected("CONNECTED to the DB: "+ colName));
    })

    mongoose.connection.on('error', ()=>{
        console.log(error('ERROR occured while connection !!!'));
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log(disconnected('DISCONNECTED, you have lost connection !!!'));
    })

    process.on('SIGINT', ()=>{
        console.log(terminated('TERMINATED connection, application closed'))
    })
}