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
    MongoClient.connect('mongodb://facebook-task:M0hdr0me@ds149268.mlab.com:49268/facebook-task', function(err, database) {
		db=database;
		if(!err) {
			console.log("We are connected");
		}else{
			console.log(err);
			console.log("We are not connected");
		}
		app.listen(5000, function() {
      console.log('listening on 5000')
    })
    })
	/*app.get('/', function(req, res) {
      res.send('Hello World')
    })*/
	
	app.get("/index2",function(req,res){
		
		res.sendFile(__dirname + "/index2.html");
	});	
	
	
	app.get('/', function(req, res){
		//res.sendFile(__dirname + '/index2.html');
		db.collection('users').find().toArray(function(err, result) {
		if (err) return console.log(err)
		//console.log(result);
		res.render('index.ejs', {users: result})
		})
	})
	

	
