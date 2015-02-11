var express = require('express');
var logger =  require('morgan');

var app = express();

app.use(logger('dev'))

app.get('/', function (request, response){
	response.send('hello world!')
})

app.get('/news', function (request, response){
	response.send('Todays News in English')
})

var server = app.listen(3000, function(){

	var host = server.address().address
	var port = server.address().port

	console.log('Exanple app listening at http://%s:%s', host, port)
})