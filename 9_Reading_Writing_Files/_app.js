var fs = require('fs');

// snycronous read and write methods (snycronous means blocking the code)
var read = fs.readFileSync('readme.txt', 'UTF-8');
console.log(read);


// write method
fs.writeFileSync('write.txt', read);
// this method will execute after read method completed so this is blockingn the code
