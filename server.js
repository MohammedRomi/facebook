const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

	app.set('view engine', 'ejs')
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json())
	app.use(express.static('public'))
	var db;
    
	app.get("/index2",function(req,res){
		
		res.sendFile(__dirname + "/index2.html");
	});	
	
	
	app.get('/', function(req, res){
		res.render("index");
	})
	
	app.listen(5000, function(){
		console.log("app running");
	})