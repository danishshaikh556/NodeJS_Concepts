var http = require('http');

var server = http.createServer();
var count =0;
function handleRequest(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain'});
  res.write(" Hello World!" + count++ );
  res.end();
}

server.on('request', handleRequest);

server.listen(8080);
