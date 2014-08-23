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

### Error 
We present some error, from first situation when you try to read the .html file from a local folder (local folder is not a CORS server),
when the server is active but the path to reach the resources is wrong, and at the end all going good and the resorces (.html) are 
imported in the main .html page, you can control all the flow in the Browser Console. 

	// try to reading from local folder 
	Imported resource from origin 'file://' has been blocked from loading by Cross-Origin Resource Sharing policy: Received an invalid response. Origin 'null' is therefore not allowed access. /home/ciccio/HTML5/polymer/tutorial/starter/index.html:1
	// wrong path to the resources 
	GET http://localhost:3000/static/components/font-roboto/roboto.html 404 (Not Found) index.html:9
	GET http://localhost:3000/static/components/core-header-panel/core-header-panel.html 404 (Not Found) index.html:10
	GET http://localhost:3000/static/components/core-toolbar/core-toolbar.html 404 (Not Found) index.html:11
	GET http://localhost:3000/static/components/paper-tabs/paper-tabs.html 404 (Not Found) index.html:12
	// correct import 
	XHR finished loading: GET "http://localhost:3000/static/components/core-header-panel/core-header-panel.css". loader.js:87
	XHR finished loading: GET "http://localhost:3000/static/components/core-toolbar/core-toolbar.css". loader.js:87
	XHR finished loading: GET "http://localhost:3000/static/components/paper-tabs/paper-tab.css". loader.js:87
	XHR finished loading: GET "http://localhost:3000/static/components/paper-tabs/paper-tabs.css". 