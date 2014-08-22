enable-cors
===========

### Intro 
Cross-Origin Resource Sharing (CORS) is a specification that enables truly open access across domain-boundaries. If you serve public content, please consider using CORS to open it up for universal JavaScript/browser access. 

### Express
To open to the CORS in express it couldn't be more easy, check out : 
	
	app.all('*', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		next();
	});

	app.get('/', function(req, res, next) {
		// Handle the get for this route
	});

	app.post('/', function(req, res, next) {
		// Handle the post for this route
	});

### There si some simple HTML5 examples to use the server 