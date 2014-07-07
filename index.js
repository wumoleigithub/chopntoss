var mongojs = require('mongojs');
var db = mongojs('127.0.0.1:27017/chop_n_toss');
var menu = db.collection('menu');
var contact = db.collection('contact');
var moment = require('moment');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.get('/menu', function(req, res) {
    console.log('get menu');
});

app.post('/menu', function(req, res) {
    console.log('post menu');
});

console.log('Server start at port 2000!');
app.listen(2000);
