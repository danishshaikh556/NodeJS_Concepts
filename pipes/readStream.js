var fs = require('fs');

var readStream = fs.createReadStream('data.txt');
//Flag 'a ' =to append to current file
//Flag 'w' = to erase and write to current file
var writeStream= fs.createWriteStream('write.txt',{ flags : 'a' });

//Reads data from data.txt when ready to read
readStream.on('data', function(data) {
  console.log('got some data:', data);
});

readStream.on('end', function() {
  console.log('ended');
});

readStream.setEncoding('utf-8');

readStream.pipe(writeStream);
