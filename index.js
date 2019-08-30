const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const mongoose = require('mongoose');
const id = require('./public/js/utility/randnum')

var Subjects = require('./public/js/subjects/subject.controller-old');

var dbName = 'curriculum';
var port = require('./Public/js/DB/properties').PORT;
var db = require('./Public/js/DB/database');
var schema = require('./public/js/subjects/subject.schemas');
var controller = require('./public/js/subjects/subject.controller')
var subjectColl = 'subjects';
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true})) ;

app.use(express.static('public'));
app.set('view engine', 'ejs');



db(dbName);

app.get('/', (req, res, next)=>{
    res.render('index');
})
 app.post('/create', (req, res, next)=>{
    var subject = mongoose.model(subjectColl, schema);

    var newSub = new subject({GUID : id.generateRandomNumber(8), Title : req.body.title, Desc : req.body.desc})
    newSub.save((err)=>{ 
        if (err){ console.log(err)}
        else {res.redirect('/')}
    })
})
app.get('/get', (req, res, next)=>{
    if(true){
        var subject = mongoose.model(subjectColl, schema);
        subject.find({},(err, subjects)=>{
           if(err){console.log(err);}
            else{ res.send(subjects);}
        })
    }else{

    var result = controller.findAll(subjectColl);
    res.send(JSON.stringify(controller.findAll(subjectColl))); }
});

//app.post('/create', Subjects.CreateSubject);

app.listen(port, (req, res)=>{
    console.log(chalk.bgGreen.bold('Server is listening at ' dbProperties.PORT + 'port'))
}) 


