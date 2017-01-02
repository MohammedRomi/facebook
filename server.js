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
			console.log("We are connected to database");
		}else{
			console.log(err);
			console.log("We are not connected to database");
		}
		app.listen(process.env.PORT ||5000, function() {
			console.log('listening on 5000 or https://facebook-task.herokuapp.com')
		})
    })
	
	app.get('/update', function(req, res){
		//res.sendFile(__dirname + '/index2.html');
		db.collection('users').find().toArray(function(err, result) {
		if (err) return console.log(err)
		//console.log(result);
		res.render('update.ejs', {users: result})
		})
	})
	
	app.get('/', function(req, res){
		//res.sendFile(__dirname + '/index2.html');
		db.collection('users').find().toArray(function(err, result) {
		if (err) return console.log(err)
		//console.log(result);
		res.render('userList.ejs', {users: result})
		})
	})
	app.get('/profileMohammed%20Romi', function(req, res){
		//res.sendFile(__dirname + '/index2.html');
		db.collection('facebook-task').find().toArray(function(err, result) {
		if (err) return console.log(err)
		//console.log(result);
		res.render('profile.ejs', {users: result})
		})
	})
	
	
	app.delete('/users', function(req, res){
		db.collection('users').findOneAndDelete({name: req.body.name}),
		
		function(err, result){
			if (err) return res.send(500, err);
			res.render('pages.ejs', {users: result})
		}
		
	})
	
	app.post('/users', function(req, res){
		db.collection('users').save(req.body, function(err, result){
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/');
      })
    })
	app.put('/users', function(req, res){
		console.log('holla');
	  db.collection('users').findOneAndUpdate({name: req.body.currentEmail }, {
		$set: {
			name: req.body.name,
			email: req.body.email,
			gender: req.body.gender,
			Address: req.body.address
		}
	  }, (err, result) => {
		if (err) return res.send(err)
		//res.send(result)
		console.log('hey');
	  })
	})
