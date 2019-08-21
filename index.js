const express = require('express');
const path = require('path');
const fs = require('fs');


var subjectTemplate = require('./public/js/classes.js')
var id = require('./public/js/randnum.js')
var dataurl = './data/'


var app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');

var subject = [] ;



for (var x = 0; x < 5; x++) {
     
    /* create a new object like 'SubjectTemplate' or we could use = {} for blank new objects. 
        If we want to replicate an identical object then use = Object.create(<object to be replicated>) */
    var  clsSubject =   Object.create(subjectTemplate); 
        clsSubject.GUID = id.generateRandomNumber(8)
        clsSubject.Title = id.generateRandomNumber(1)+"#";
        clsSubject.Description = "Subject to learn js"; 
        subject[x] = clsSubject;
       
}
    

//subject = { subject };
fs.writeFile(dataurl + 'subjects.json', JSON.stringify(subject,null, 2), (err)=>{
    if (err) throw err ;

    console.log("Written to file !!!");
});


app.get('/add', (req, res)=>{
    res.render('index');
}).listen(8080);