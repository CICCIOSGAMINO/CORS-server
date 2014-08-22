var express = require('express');

app = express();

// serve the static file (if needed in the html page to serve)
app.use(express.static(__dirname + '/static'));


// set the header to accept the CORS request ------------------------  CORS   ---------------------------------------------
app.all('*', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Request-With');
	next();
});
//  ------------------------------------------------------------------  CORS  ---------------------------------------------

app.get('/', function(req, res){
	res.sendFile(__dirname + '/static/intro.html');
});

app.get('/content', function(req, res){
	res.send('<section><h3>Section imported  </h3></section>');
});

app.get('/warnings', function(req, res){
	res.sendFile(__dirname + '/static/warnings.html');
});

app.get('/custom-elments', function(req, res){
	res.sendFile(__dirname + '/static/custom_elements.html');
});

app.listen(3000, function(){
	console.log('App listening on port 3000');
});
