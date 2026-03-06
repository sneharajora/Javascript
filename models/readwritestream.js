// reading a file  and than transferring data into other file 

const fs = require('fs');

const reading = fs.createReadStream('./files/sample.txt');

const write = fs.createWriteStream('sample2.txt');

reading.pipe(write);