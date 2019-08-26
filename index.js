const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

var dbName = 'curriculum';
var port = require('./Public/js/DB/properties').PORT;
var db = require('./Public/js/DB/database');
var subjectRouter = require('./Public/js/subjects/subject.routes');
var router = express.Router;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use(express.static('public'));
app.set('view engine', 'ejs') ;



db(dbName);

subjectRouter(router);

app.listen(port, (req, res)=>{
    console.log(chalk.bgGreen.bold('Server is listening at $(dbProperties.PORT) port'))
})


