var http = require("http"); //require the http module that ships with Node.js

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  })
  .listen(8888);
