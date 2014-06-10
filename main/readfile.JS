var fs = require('fs');

function callbackReq(errr,resps){
if(errr)return  handleError(errr);
console.log("File Details-- " + resps);
}


fs.readFile('/mydir/hello.txt',callbackReq);