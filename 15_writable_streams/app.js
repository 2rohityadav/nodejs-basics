const fs = require('fs');

// const myRS = fs.createReadStream(__dirname + '/readme.txt');
const myRS = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// writable stream
const myWS = fs.createWriteStream(__dirname + '/writeMe.txt');

myRS.on('data', (chunk) => {
  console.log('new check received:');
  //console.log(chunk);
  myWS.write(chunk)
})

// As we doing same thing like before reading and writing like so but here we are converted and receiving the data into the peaces or chunks so we getting quickly instead of loading all the content or data into the memory.

// so for acheiving the same thing we can do using pipe also


/* Streams

- Writable streams - Allow node.js to write the data to a streams
- Readable streams - Allow node.js to read the data from the stream
- Duplex - Can read and write to a stream

*/
