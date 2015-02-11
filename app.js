var express = require('express');
var logger =  require('morgan');
var swig = require('swig')

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

//Removes Caching for dev purposes
swig.setDefaults({ cache: false });

app.use(logger('dev'));

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}]

app.get('/', function (request, response){
	response.render('index', {title: 'Hall of Fame', people: people})
})

app.get('/news', function (request, response){
	response.send('Todays News in English')
})

var server = app.listen(3000, function(){

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
})