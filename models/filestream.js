const  fs = require("fs");

///////Read
const readStream = fs.createReadStream('notes.txt',{encoding:'utf-8'});

// handle data events

readStream.on('data',(chunk)=>{
    console.log(`Received chunk: ${chunk.length} bytes`);
    console.log(chunk.toString());
    
});

// handle end of stream

readStream.on('end',()=>{
    console.log('Finished reading the file.');  
});

// handle error

readStream.on('error',(err)=>{
    console.log(`Error:${err.message}`);
});
