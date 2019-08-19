const express = require('express');
const path = require('path');
const fs = require('fs');


var cl = require('./public/js/classes.js')
var id = require('./public/js/randnum.js')
var dataurl = './data/'


var app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');


var clsSubject = cl.classSubject;
var clsSkill = cl.classSkill;

clsSubject.GUID = id.generate();
clsSubject.Title = "C#";
clsSubject.Description = "Subject to learn C#";

fs.writeFile(dataurl + 'subjects.json', JSON.stringify(clsSubject,null, 2), (err)=>{
    if (err) throw err;

    console.log('GUID: ' + clsSubject.GUID);
});






//count the number of properties in an object
var subject = {title:"home", desc:"none",notes:"no notes yet"};









app.get('/add', (req, res)=>{
    res.render('index');
}).listen(8080);