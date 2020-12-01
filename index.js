const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path')
var port = require('./Public/js/DB/properties').PORT;
var db = require('./Public/js/DB/database');
var subjectController = require('./public/js/subjects/subject.controller')
var skillController = require('./public/js/skills/skills.controller')

var dbName = 'curriculum';
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true})) ;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));





db(dbName);




app.get('/', (req, res, next)=>{
    res.render('index');
})

 app.post('/createSubject', (req, res, next)=>{
    subjectController.createSubject(req.body.title, req.body.desc)
    .then(()=>{ res.redirect('./gsub'); })
    .catch((error)=>{ console.log(error); })
})

app.post('/createSkill', (req, res, next)=>{
    skillController.createSkill(req.body.title, req.body.desc, req.body.datedone)
    .then(()=>{ res.redirect('./gskill'); })
    .catch((error)=>{ console.log(error); })
})

app.get('/gsub', (req, res,)=>{
    subjectController.findAllSubjects()
    .then((data)=>{ res.send(data); })                                             
    .catch((error)=>{ console.log(error); })
});

app.get('/gskill', (req, res,)=>{
    skillController.findAllSkills()
    .then((data)=>{ res.send(data); })                                             
    .catch((error)=>{ console.log(error); })
});
//Write a Delete Route
/*app.get('/d/:GUID', (req, res)=>{

    console.log(req.params.GUID)
    controller.removeSubject(req.params.GUID)
    .then(()=>{ 
        //res.redirect('./get');
        console.log(GUID + " has been DELETED.");
     })
    .catch((error)=>{console.log(error); })
})*/






app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(chalk.bgRedBright('The Server is listening at port : ' + port))
    }
})
 

        

    
