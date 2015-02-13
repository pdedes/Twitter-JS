var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: false} );
  console.log(tweets)
  
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweets, showForm: true} );
});

router.get('/users/:name/tweets/:id', function(req, res){
	var name = req.params.name;
	var id = parseInt(req.params.id, 10);
	var tweets = tweetBank.find( {id: id} );
	res.render('index', { title: 'Tweet #'+id+'from'+name, tweets: tweets, showForm: false, showFormUser: false})
})

router.post('/submit', function(req, res) {
	console.log(req.body);
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
})

module.exports = router;