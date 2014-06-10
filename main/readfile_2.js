var fs =require('fs');

function callBack(error,resp){
 if(error) return handleError(error);
  dan ="" + resp;
  
 console.log("OutPut               ===" + resp);
 console.log("String Maniupilation ===" + dan.substring(2,5));
}

fs.readFile('/home/danish556/nodeJS/project1/hellotextfile',callBack);
