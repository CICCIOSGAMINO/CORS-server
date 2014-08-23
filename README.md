enable-cors
===========

### Intro 
Cross-Origin Resource Sharing (CORS) is a specification that enables truly open access across domain-boundaries. If you serve public content, please consider using CORS to open it up for universal JavaScript/browser access. 

A CORS server give the CORS resources on the web through simple GET request to the resources (like REST apis). 

### Express
Express is the Node.js mainly famous application framework, use in this case to accept the CORS request and responde with the right 
resources. To enable the CORS request in express set to '.all' '*' type of the request the header "Access-Control-Allow-Origin", "*" 
and  "Access-Control-Allow-Headers", "X-Requested-With" in all the response.  it couldn't be more easy, check out : 
	
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

### HTML5 
For have an idea of how use the resources see the HTML folder in the project, remember to start the Express service on you machine 
before open the html pages.