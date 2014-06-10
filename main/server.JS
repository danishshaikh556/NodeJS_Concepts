
/* this is a simple Hello world server program*/


var http   = require('http');
var server = http.createServer();

//Creating a simple function 
function handleRequest(req,res){
res.writeHead(200,{'content-type':'text/plain'});
for(var i=0;i<100;i++){
res.write("Hello World!" + i);
}
res.end();
}

server.on('request',handleRequest);
server.listen(8080);
