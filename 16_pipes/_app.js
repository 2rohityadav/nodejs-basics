const fs = require('fs');

// const myRS = fs.createReadStream(__dirname + '/readme.txt');
const myRS = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// writable stream
const myWS = fs.createWriteStream(__dirname + '/writeMe.txt');

// so here we can read and write stream with chunks using pip
myRS.pipe(myWS);
