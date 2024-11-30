const fs = require('fs');
const dir = '/myDirectory';

const filePath = `${dir}/log.txt`;

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.writeFileSync(filePath,'This is a log message');
console.log(`Directory created and file written:${filePath}`);