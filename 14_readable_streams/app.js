const fs = require('fs');

// const myRS = fs.createReadStream(__dirname + '/readme.txt');
const myRS = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

myRS.on('data', (chunk) => {
  console.log('new check received:');
  console.log(chunk);
})


/*
**What is buffer**
  - Temporary storage spot for a chunk of data that is being transfered from one place to another
  - The buffer is filled with data then passed along
  - Transfer small chunks of data at a time
*/


/*
**What is streams**
  - Can create stream in node.js to transfer the data
  - Increase performance
*/


// So the streams of data flow overtime one place to another and the data flow in the streams into the buffer which collect small chunks of data together and when the buffer is full then it passed the data in the form of chunks to the process to the client 
