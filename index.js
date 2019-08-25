const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');



var subjectTemplate = require('./public/js/classes.js');
var id = require('./Public/js/utility/randnum.js');
var wirteToDB = require('./Public/js/utility/saveToDB.js/index.js');
var dbModels = require('./Public/js/skillset/dbmodels.js/index.js.js');

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
    res.render('add');
})

app.post('/add', 
(req, res)=>{ 


        
        res.redirect('/add');
})

app.listen(8080);
