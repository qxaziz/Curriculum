const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');



var subjectTemplate = require('./public/js/classes.js');
var id = require('./public/js/randnum.js');
var wirteToDB = require('./public/js/saveToDB.js');
var dbModels = require('./public/js/dbmodels.js');

var dataurl = './data/';

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use(express.static('public'));
app.set('view engine', 'ejs') ;

/*---------------------------------------------------*/

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://azizqureshi:7jZZ%26nA%40yx-wZ%407@curriculum-tknce.mongodb.net/test", {useNewUrlParser: true });

var subjects = [] ; 
app.get('/add', 
(req, res)=>{
    res.render('index');
})

app.post('/add', 
(req, res)=>{ 

    var clSubject =  dbModels.subjectModel;
        clSubject.GUID = id.generateRandomNumber(8);
        clSubject.Title = req.body.title;
        clSubject.Description = req.body.desc;
        
        if(clSubject.Title){
          subjects.push(clSubject);
          wirteToDB.WriteToDB(dataurl,subjects);
         
         // .then(()=>{res.redirect('/add')})
         // .catch((err)=>{res.status(400).send("unable to save to db");})
        }
        res.redirect('/add');
})

app.listen(8080);