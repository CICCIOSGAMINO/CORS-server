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
	res.sendFile(__dirname + '/static/generic.html');
	console.log(req.path);
});

// serve all the components present in components folders 
app.get('/static/*', function(req, res){
	res.sendFile(__dirname + req.path);
	console.log(req.path);
});


app.listen(3000, function(){
	console.log('App listening on port 3000');
}); 
