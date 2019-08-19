var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static('Public'));

app.get('/add', (req, res)=>{
    res.sendFile(path.join(__dirname + '/Public/add.html'));
}).listen(8080);