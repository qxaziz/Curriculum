const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const mongoose = require('mongoose');
const id = require('./public/js/utility/randnum')

var Subjects = require('./public/js/subjects/subject.controller-old');

var dbName = 'curriculum';
var port = require('./Public/js/DB/properties').PORT;
var db = require('./Public/js/DB/database');
var subjectSchema = require('./public/js/subjects/subject.schemas');
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
    
    next();
},()=>{
    console.log("I am in the home route");

    controller.removeSubject("t0RcSLro")
    .then(()=>{ res.redirect('./get'); })
    .catch((error)=>{console.log(error); })
})

 app.post('/create', (req, res, next)=>{


    controller.createSubject(req.body.title, req.body.desc)
    .then(()=>{ res.redirect('./get'); })
    .catch((error)=>{ console.log(error); })

})

app.get('/d/:GUID', (req, res)=>{

    console.log(req.params.GUID)
    controller.removeSubject(req.params.GUID)
    .then(()=>{ res.redirect('./get'); })
    .catch((error)=>{console.log(error); })
})


app.get('/get', (req, res,)=>{

    controller.findAllSubjects()
    .then((data)=>{ res.send(data); })                                             
    .catch((error)=>{ console.log(error); })

});



app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(chalk.bgRedBright('The Server is listening at port : ' + port))
    }
})
 

        

