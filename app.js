var express = require('express');
var logger =  require('morgan');
var swig = require('swig')

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

app.use(logger('dev'));

app.get('/', function (request, response){
	response.send('hello world!')
})

app.get('/news', function (request, response){
	response.send('Todays News in English')
})

var server = app.listen(3000, function(){

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
})