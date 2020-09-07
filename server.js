var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var gm = require('gm');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dory7141@gmail.com',
        pass: 'Andreiboss12'
    }
});

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Andreiboss12',
    database : 'munchiezDB'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static('C:\\Users\\Dori\\WebstormProjects\\mnchz'));
app.use(express.static('C:\\Users\\Dori\\WebstormProjects\\assets'));
app.use(express.static('C:\\Users\\Dori\\WebstormProjects\\stylrFrontPage.css'));
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname+'/FrontPage.html'));
});

app.listen(3000);
console.log("Running at Port 3000");