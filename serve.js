var finalhandler = require("finalhandler");
var http = require("http");
var serveStatic = require("serve-static");

// Serve up folder where index.html is
var serve = serveStatic("./", { index: ["index.html", "index.htm"] });

// Create server
var server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(4200);

console.log("Serving on http://localhost:4200/");
