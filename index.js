const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
var Subjects = require('./public/js/subjects/subject.controller');

var dbName = 'curriculum';
var port = require('./Public/js/DB/properties').PORT;
var db = require('./Public/js/DB/database');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true})) ;

app.use(express.static('public'));
app.set('view engine', 'ejs');



db(dbName);

app.get('/', (req, res)=>{
    res.render('index');
})
app.post('/create', Subjects.CreateSubject);

app.listen(port, (req, res)=>{
    console.log(chalk.bgGreen.bold('Server is listening at $(dbProperties.PORT) port'))
})


