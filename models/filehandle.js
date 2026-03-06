const http = require('http');
const fs  = require('fs');

http.createServer((req,res)=>{
       fs.writeFileSync('./files/al.txt',"hey",(err)=>{
            if(fs.existsSync('./files/al.txt')){
               console.log('File exists');
            } else{
               console.log('File not found');
            }
       }); 
}).listen(8000);

