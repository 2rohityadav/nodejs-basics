var fs = require('fs');

// deleting the file
fs.unlink('write_asy.txt');

// syncronous

// fs.mkdirSync('stuff');

fs.rmdirSync('stuff');
