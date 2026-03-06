/// write stream 
 const fs = require('fs');

 const writable = fs.createWriteStream('write.txt');

 writable.write("hello, ");
 writable.write('world');
 writable.end();
 