const express = require('express');
const path = require('path');
const fs = require('fs');


var cl = require('./public/js/classes.js')
var id = require('./public/js/randnum.js')
var dataurl = './data/'


var app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');

var subject = [];
var clsSubject;

for (var x = 0; x < 5; x++) {

        clsSubject = cl.classSubject;

        clsSubject.GUID = id.generate(8);
        console.log(clsSubject.GUID);
        clsSubject.Title = id.generate(1)+"#";
        clsSubject.Description = "Subject to learn C#";
        subject.push(clsSubject);
}


//subject = { subject };
fs.writeFile(dataurl + 'subjects.json', JSON.stringify(subject,null, 2), (err)=>{
    if (err) throw err;

    console.log('GUID:' + id.generate(8));
});


app.get('/add', (req, res)=>{
    res.render('index');
}).listen(8080);