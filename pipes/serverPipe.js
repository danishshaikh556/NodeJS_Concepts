var http =require('http');
var fs   =require('fs');

function randomFileName(){
 return "hello234.txt";
}
http.createServer(function(req,res){

var fileName = randomFileName;

console.log(" Writing to FIle" + fileName);

req.pipe(fs.createWriteStream(fileName));

res.writeHead(200,{'content-type':'text/plain'});
fs.createReadStream(_filename).pipe(res);
}).listen(8080); 




